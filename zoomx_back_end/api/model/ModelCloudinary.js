var cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dbp8yfsyx',
    api_key: '757189822534373',
    api_secret: 'Pd3eMOBX99OpjR-ARrKjKzd1FDw'
});
var self = module.exports = {
    uploadSingle: (file) => {
        return new Promise(resolve => {
            cloudinary.uploader.upload(file, {
                folder: 'single'
            })
                .then(result => {
                    if (result) {
                        const fs = require('fs')
                        fs.unlinkSync(file)
                        resolve({
                            url: result.secure_url
                        })
                    }
                })
        })
    },
    uploadMultiple: (file) => {
        return new Promise(resolve => {
            cloudinary.uploader.upload(file, {
                folder: 'home'
            })
                .then(result => {
                    if (result) {
                        const fs = require('fs')
                        fs.unlinkSync(file)
                        resolve({
                            url: result.secure_url,
                            id: result.public_id,
                            thumb1: self.reSizeImage(result.public_id, 200, 200),
                            main: self.reSizeImage(result.public_id, 500, 500),
                            thumb2: self.reSizeImage(result.public_id, 300, 300)
                        })
                    }
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
}