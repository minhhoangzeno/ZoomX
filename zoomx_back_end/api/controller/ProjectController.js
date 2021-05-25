
const mongoose = require('mongoose'),
    Project = mongoose.model('project'),
    AddImageProject = require('../utils/project/AddImageProject'),
    UpdateImageProject = require('../utils/project/UpdateImageProject')
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
    AddImageProject.addImageProject(req).then(result => {
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
    UpdateImageProject.updateImageProject(req.params.project_id,req).then(result => {
        Project.findByIdAndUpdate(req.params.project_id,{
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
            imageInfor: result.filter(item => item.imageInfor)[0].imageInfor,
        }).exec().then(project => {
            res.send(project)
        })
    }).catch(error => {
        res.send(error)
    })
    
}
exports.delete_project = (req, res) => {
    AddImageProject.deleteImageProject(req.params.project_id).then(result => {
        res.send(result)
    }).catch(error => {
        res.send(error)
    })
}