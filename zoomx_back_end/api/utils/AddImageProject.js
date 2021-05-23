const mongoose = require('mongoose'),
    Upload = require('../model/UploadImageModel'),
    Project = mongoose.model('project'),
    ImageUtil = require('./ImageUtil')
    ;

module.exports = {
    addImageProject: (req) => {
        return new Promise((resolve, reject) => {
            let fileCover = req.files.filter(item => item.fieldname == 'imageCover');
            let fileInfor = req.files.filter(item => item.fieldname == 'imageInfor');
            let fileHero = req.files.filter(item => item.fieldname == 'imageHero');
            let fileProject = req.files.filter(item => item.fieldname == 'imageProject');

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
                resolve(result)
            }).catch(error => {
                reject(error)
            })
        })
    },
    
    deleteImageProject: (projectId) => {
        return new Promise((resolve, reject) => {
            Project.findById(projectId).exec()
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
                    project.remove().then((pj) => {
                        resolve(pj)
                    }).catch(error => {
                        reject(pj)
                    })
                })
        })

    }
}