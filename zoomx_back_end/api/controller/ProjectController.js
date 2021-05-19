const mongoose = require('mongoose'),
    Project = mongoose.model('project'),
    Upload = require('../model/UploadImageModel');

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
    let objProject = {
        projectName: req.body.projectName,
        typeInvestment: req.body.typeInvestment,
        address: req.body.address,
        acreage: req.body.acreage,
        totalInvestment: req.body.totalInvestment,
        categoryInvestment: req.body.categoryInvestment,
        description: req.body.description
    }
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
            reject(err)
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
            reject(err)
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
            reject(err)
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
            reject(err)
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
            imageCover: result.filter(item => item.imageCover)[0].imageCover,
            imageHero: result.filter(item => item.imageHero)[0].imageHero,
            imageProject: result.filter(item => item.imageProject)[0].imageProject,
            imageInfor: result.filter(item => item.imageInfor)[0].imageInfor
        }
        let newProject = new Project(objProject);
        newProject.save().then((project) => {
            res.send(project)
        }).catch(error => {
            res.send(error)
        })
    }).catch(error => {
        res.send(error)
    })
}

exports.upload_cover_image = (req, res) => {
    Upload.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/Project'
    }).then(result => {
        const id = req.params.project_id;
        const update_project = new Promise((resolve, reject) => {
            Project.findByIdAndUpdate(id, { imageCover: result._id }, { new: true, useFindAndModify: false })
                .then(investImg => {
                    resolve(investImg)
                })
                .catch(err => {
                    reject(err)
                })
        })
        update_project
            .then(investImg => {
                res.send({ investImg })
            })
            .catch(err => {
                res.send({ err })

            })
    })
        .catch(error => {
            res.send({ error })
            console.log(error)
        })
}


exports.upload_infor_image = (req, res) => {
    Upload.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/Project'
    }).then(result => {
        const id = req.params.project_id;
        const update_project = new Promise((resolve, reject) => {
            Project.findByIdAndUpdate(id, { imageInfor: result._id }, { new: true, useFindAndModify: false })
                .then(investImg => {
                    resolve(investImg)
                })
                .catch(err => {
                    reject(err)
                })
        })
        update_project
            .then(investImg => {
                res.send({ investImg })
            })
            .catch(err => {
                res.send({ err })

            })
    })
        .catch(error => {
            res.send({ error })
            console.log(error)
        })
}

exports.upload_hero_image = (req, res) => {
    Upload.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/Project'
    }).then(result => {
        const id = req.params.project_id;
        const update_project = new Promise((resolve, reject) => {
            Project.findByIdAndUpdate(id, { imageHero: result._id }, { new: true, useFindAndModify: false })
                .then(investImg => {
                    resolve(investImg)
                })
                .catch(err => {
                    reject(err)
                })
        })
        update_project
            .then(investImg => {
                res.send({ investImg })
            })
            .catch(err => {
                res.send({ err })

            })
    })
        .catch(error => {
            res.send({ error })
            console.log(error)
        })
}

exports.upload_project_image = (req, res) => {
    Upload.uploadMultipleFile({
        file: req.files,
        path: 'ZoomX/Project'
    }).then((result) => {
        console.log(result);
        const image_id = []
        result.map(image => {
            image_id.push(image._id)
        })
        const id = req.params.project_id
        const update_project = new Promise((resolve, reject) => {
            Project.findByIdAndUpdate(id, { imageProject: image_id }, { new: true, useFindAndModify: false })
                .then((cinemaImg) => {
                    resolve(cinemaImg)
                }).catch((error) => {
                    reject(error)
                })
        })
        update_project
            .then((cinemaImg) => {
                res.send({ cinemaImg })
            }).catch((error) => {
                res.send({ error })
            })
    }).catch((error) => {
        res.send({ error })
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
    Project.findByIdAndDelete(req.params.project_id)
        .then(pj => {
            res.send(pj)
        })
        .catch(err => {
            res.send(err)
        })
}