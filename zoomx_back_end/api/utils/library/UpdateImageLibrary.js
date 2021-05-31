const AddImageLibrary = require('./AddImageLibrary');

const mongoose = require('mongoose'),
    Upload = require('../../model/UploadImageModel'),
    LibraryImage = mongoose.model('libraryImage'),
    ImageUtil = require('../ImageUtil')
    ;

module.exports = {
    updateImageLibrary: (libraryImageId, req) => {
        return new Promise(async (resolve, reject) => {
            await LibraryImage.findById(libraryImageId).exec()
                .then(libImage => {
                    let fileId = [];
                    fileId.push(libImage.imageCover);
                    libImage.imageList.map(item => {
                        fileId.push(item)
                    })
                    fileId.map(item => {
                        ImageUtil.deleteSingleFile(item).then(() => {
                        }).catch(error => {
                            console.log(error)
                        })
                    })
                    LibraryImage.findByIdAndUpdate(libraryImageId, {
                        imageCover: null,
                        imageList: []
                    }).then(() => {
                        console.log('ok')
                    }).catch(error => {
                        console.log(error)
                    })
                })

            AddImageLibrary.addImageLibrary(req).then(result => {
                resolve(result)
            }).catch(error => {
                reject(error)
            })
        })
    },
}