const mongoose = require('mongoose'),
    Upload = require('../../model/UploadImageModel'),
    LibraryImage = mongoose.model('libraryImage'),
    ImageUtil = require('../ImageUtil')
    ;

module.exports = {
    addImageLibrary: (req) => {
        return new Promise((resolve, reject) => {
            let fileCover = req.files.filter(item => item.fieldname == 'imageCover');
            let fileList = req.files.filter(item => item.fieldname == 'imageList');

            let uploadCover = new Promise((resolve, reject) => {
                Upload.uploadSingleFile({
                    file: fileCover[0],
                    path: 'ZoomX/Library/Image'
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
            let uploadList = new Promise((resolve, reject) => {
                Upload.uploadMultipleFile({
                    file: fileList,
                    path: 'ZoomX/Library/Image'
                }).then(resultList => {
                    let idPj = [];
                    resultList.map(item => {
                        idPj.push(item._id)
                    })
                    resolve({
                        imageList: idPj
                    })
                }).catch(err => {
                    resolve({
                        imageList: null
                    })
                })
            })
            Promise.all([uploadCover,uploadList]).then(result => {
                resolve(result)
            }).catch(error => {
                reject(error)
            })
        })
    },
    
    deleteImageLibrary: (libraryId) => {
        return new Promise((resolve, reject) => {
            LibraryImage.findById(libraryId).exec()
                .then(libraryImage => {
                    let fileId = [];
                    fileId.push(libraryImage.imageCover);
                    libraryImage.imageList.map(item => {
                        fileId.push(item)
                    })
                    fileId.map(item => {
                        ImageUtil.deleteSingleFile(item).then(() => {
                        }).catch(error => {
                            console.log(error)
                        })
                    })
                    libraryImage.remove().then((libImage) => {
                        resolve(libImage)
                    }).catch(error => {
                        reject(error)
                    })
                })
        })

    }
}