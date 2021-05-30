const AddImageProject = require('./AddImageProject');

const mongoose = require('mongoose'),
    Upload = require('../../model/UploadImageModel'),
    Project = mongoose.model('project'),
    ImageUtil = require('../ImageUtil')
    ;

module.exports = {
    updateImageProject: (projectId, req) => {
        return new Promise(async (resolve, reject) => {
            await Project.findById(projectId).exec()
                .then(project => {
                    let fileId = [];
                    fileId.push(project.imageCover);
                    fileId.push(project.imageHero);
                    fileId.push(project.imageInfor);
                    project.imageProject.map(item => {
                        fileId.push(item)
                    })
                    fileId.map(item => {
                        ImageUtil.deleteSingleFile(item).then(() => {
                        }).catch(error => {
                            console.log(error)
                        })
                    })
                    Project.findByIdAndUpdate(projectId, {
                        imageCover: null,
                        imageHero: null,
                        imageInfor: null,
                        imageProject: []
                    }).then(() => {
                        console.log('ok')
                    }).catch(error => {
                        console.log(error)
                    })
                })

            AddImageProject.addImageProject(req).then(result => {
                resolve(result)
            }).catch(error => {
                reject(error)
            })
        })
    },
}