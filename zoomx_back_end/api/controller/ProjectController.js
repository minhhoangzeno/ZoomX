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
        console.log(project)
    }).catch(err => {
        res.send(err)
    })
}

exports.add_project = (req, res) => {
    const newProject = new Project(req.body);
    const addProject = new Promise((resolve, reject) => {
        newProject.save()
            .then((project) => {
                resolve(project)
            })
            .catch(err => {
                reject(err)
            })
    })
    addProject.then(project => {
        res.send(project)
    }).catch(err => {
        res.send(err)
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