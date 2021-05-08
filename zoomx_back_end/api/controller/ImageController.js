var mongoose = require('mongoose'),
    Image = mongoose.model('image'),
    Upload = require('../model/UploadImageModel');

exports.get_image = (req, res) => {
    const getImagePromise = new Promise((resolve, reject) => {
        Image.find({ isDeleted: false })
            .then((images) => {
                resolve(images)
            })
            .catch((err) => {
                reject(err)
            })
    })
    getImagePromise.then((images) => {
        res.send({ images })
    })
        .catch((err) => {
            res.send({ err })
        })
}