const mongoose = require('mongoose'),
    File = mongoose.model('file'),
    cloudinary = require('cloudinary').v2,
    UploadFile = require('../model/UploadFileModel'),
    Cloudinary = require('../model/ModelCloudinary')
    ;

var utils = module.exports = {
    updateSingeFile: (file, fileId, folder) => {
        return new Promise((resolve, reject) => {
            console.log("file",file)
            File.findById(fileId).exec()
                .then(async data => {
                    await cloudinary.uploader.destroy(data.fileId);
                    Cloudinary.uploadSingle({
                        file: file?.path,
                        path: `ZoomX/${folder}`
                    }).then(result => {
                        File.findByIdAndUpdate(fileId, {
                            fileUrl: result.url,
                            fileId: result.id
                        }).exec()
                        resolve(result)
                    })
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    deleteSingleFile: (fileId) => {
        return new Promise((resolve, reject) => {
            File.findById(fileId).exec()
                .then(async data => {
                  
                    await cloudinary.uploader.destroy(data.fileId);
                    data.remove()
                    resolve(data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },



}