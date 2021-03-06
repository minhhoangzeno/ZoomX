var cloudinary = require('cloudinary').v2;
const util = require('util');
cloudinary.config({
    cloud_name: 'dxluzmtgj',
    api_key: '378759745185428',
    api_secret: '3k4GY1M60ERE-rf4gvks7UHPuZA'
});

var self = module.exports = {
    uploadSingle: (request) => {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload(request.file, {
                folder: request.path
            }).then((result) => {
                const fs = require('fs')
                const unlinkP = util.promisify(fs.unlink)
                unlinkP(request.file).then(() => {
                    resolve({
                        url: result.secure_url,
                        id: result.public_id

                    })
                }).catch((error) => {
                    resolve({
                        url: result.secure_url,
                        id: result.public_id
                    })
                })

            }).catch((error) => {
                reject(error)
            })
        })
    },

    uploadMultiple: (request) => {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload(request.file, {
                folder: request.path
            }).then((result) => {
                const fs = require('fs')
                const unlinkP = util.promisify(fs.unlink)
                unlinkP(request.file).then(() => {
                    resolve({
                        url: result.secure_url,
                        id: result.public_id

                    })
                }).catch((error) => {
                    resolve({
                        url: result.secure_url,
                        id: result.public_id
                    })
                })

            }).catch((error) => {
                reject(error)
            })
        })
    },
    reSizeImage: (id, h, w) => {
        return cloudinary.url(id, {
            height: h,
            width: w,
            crop: 'scale',
            format: 'jpg'
        })
    },
    deleteSingle: (request) => {
        cloudinary.uploader.destroy(request, {
            resource_type: 'image'
        }, function (error, result) {
            console.log(result, error)
        })
    },
    uploadFilePDF: (request) => {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload_large(request.file, { resource_type: 'image' }).then()
        })
    }
}