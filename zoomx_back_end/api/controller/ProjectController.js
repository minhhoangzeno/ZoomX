const mongoose = require('mongoose'),
    Project = mongoose.model('project'),
    Upload = require('../model/UploadImageModel'),
    ImageUtil = require('../utils/ImageUtil'),
    cloudinary = require('cloudinary').v2
    ;

exports.get_project = (req, res) => {
    const getProjectPromise = new Promise((resolve, reject) => {
        Project.find({ isDeleted: false })
            .populate([
                {
                    path: 'imageProject',
                    populate: {
                        path: 'imageProject',
                        model: 'image',
                        select: 'url'
                    },
                    select: 'url'
                },
                {
                    path: 'imageCover',
                    model: 'image',
                    select: 'url'
                },
                {
                    path: 'imageHero',
                    model: 'image',
                    select: 'url'
                },
                {
                    path: 'imageInfor',
                    model: 'image',
                    select: 'url'
                }
            ])
            .then(project => {
                resolve(project)
            })
            .catch(err => {
                reject(err)
            })
    })
    getProjectPromise.then(project => {
        res.send(project)
    }).catch(err => {
        res.send(err)
    })
}

exports.add_project = (req, res) => {
    let fileCover = req.files.filter(item => item.fieldname == 'fileCover');
    let fileInfor = req.files.filter(item => item.fieldname == 'fileInfor');
    let fileHero = req.files.filter(item => item.fieldname == 'fileHero');
    let fileProject = req.files.filter(item => item.fieldname == 'fileProject');

    let uploadCover = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: fileCover[0],
            path: 'ZoomX/Project'
        }).then(resultCover => {
            resolve({
                imageCover: resultCover._id
            })
        }).catch(err => {
            resolve({
                imageCover: null
            })
        })
    })
    let uploadInfor = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: fileInfor[0],
            path: 'ZoomX/Project'
        }).then(resultInfor => {
            resolve({
                imageInfor: resultInfor._id
            })
        }).catch(err => {
            resolve({
                imageInfor: null
            })
        })
    })
    let uploadHero = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: fileHero[0],
            path: 'ZoomX/Project'
        }).then(resultHero => {
            resolve({
                imageHero: resultHero._id
            })
        }).catch(err => {
            resolve({
                imageHero: null
            })
        })
    })
    let uploadProject = new Promise((resolve, reject) => {
        Upload.uploadMultipleFile({
            file: fileProject,
            path: 'ZoomX/Project'
        }).then(resultProject => {
            let idPj = [];
            resultProject.map(item => {
                idPj.push(item._id)
            })
            resolve({
                imageProject: idPj
            })
        }).catch(err => {
            resolve({
                imageProject: null
            })
        })
    })
    Promise.all([uploadProject, uploadHero, uploadInfor, uploadCover]).then(result => {
        console.log("result", result)
        console.log(result.filter(item => item.imageProject)[0].imageProject)
        let objProject = {
            projectName: req.body.projectName,
            typeInvestment: req.body.typeInvestment,
            address: req.body.address,
            acreage: req.body.acreage,
            totalInvestment: req.body.totalInvestment,
            categoryInvestment: req.body.categoryInvestment,
            description: req.body.description,
            imageCover: result.filter(item => item.imageCover)[0]?.imageCover ? result.filter(item => item.imageCover)[0].imageCover : null,
            imageHero: result.filter(item => item.imageHero)[0]?.imageHero ? result.filter(item => item.imageHero)[0].imageHero : null,
            imageProject: result.filter(item => item.imageProject)[0]?.imageProject ? result.filter(item => item.imageProject)[0].imageProject : null,
            imageInfor: result.filter(item => item.imageInfor)[0]?.imageInfor ? result.filter(item => item.imageInfor)[0].imageInfor : null
        }
        let newProject = new Project(objProject);
        newProject.save().then((project) => {
            res.send(project)
        }).catch(error => {
            res.send(error)
        })
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
}

exports.update_project = (req, res) => {
    const id = req.params.project_id;
    const updataObj = req.body;
    Project.findByIdAndUpdate(id, updataObj)
        .then(pj => {
            res.send(pj)
        })
        .catch(err => {
            res.send(err)
        })
}
exports.delete_project = (req, res) => {
    Project.findById(req.params.project_id).exec()
    .then(project => {
        let fileId = [];
        fileId.push(project.imageCover);
        fileId.push(project.imageHero);
        fileId.push(project.imageInfor);
        project.imageProject.map(item => {
            fileId.push(item)
        })
        fileId.map(item => {
            cloudinary.uploader.destroy(item)
        })
        
    })
}