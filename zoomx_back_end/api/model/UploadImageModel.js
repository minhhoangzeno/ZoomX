
const { resolve } = require('path');

var Cloudinary = require('./ModelCloudinary'),
    mongoose = require('mongoose'),
    Image = mongoose.model('image');
module.exports = {
    uploadSingleFile: (request) =>{
        return new Promise((resolve,reject) => {
            Cloudinary.uploadSingle({
                file: request.file.path,
                path: request.path
            })
            .then((result) => {
                Image.create({
                    imageName: result.name,
                    url: result.url,
                    imageId: result.id
                })
                .then((image) => {
                    resolve(image)
                })
                .catch(err => {
                    reject(err)
                })
            })
            .catch(error => {
                reject(error)
            })
        })
    }
}