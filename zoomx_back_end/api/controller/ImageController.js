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

exports.add_a_image = (req, res) => {
    Upload.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/Image'
    }).then((ImageDetail) => {
        res.send({ ImageDetail })
    }).catch((err) => {
        res.send({ err })
    })
}
exports.add_images = (req, res) => {
    Upload.uploadMultipleFile({
        files: req.files,
        path: 'Movie_Introduce/Image'
    }).then((arrImg) => {
        res.send({ arrImg })
    }).catch((err) => {
        res.send({ err })
    })

}

exports.update_image = (req, res) => {
    const image_id = req.params.image_id;
    Image.findById(image_id).then((image) => {
        console.log(image);
        Cloudinary.uploadSingle(req.files[0].path).then((result) => {
            console.log(result);
            image.ImageName = result.name
            image.Url = result.url
            image.ImageId = result.id
            image.save()
                .then((imageSaved) => {
                    res.send({ imageSaved })
                }).catch((error) => {
                    res.send({ error })
                })
        }).catch((error) => {
            res.send({ error })
        })
    })
}

/**
 * 
 */
exports.delete_image = (req, res) => {
    const image_id = req.params.image_id;
    Image.findByIdAndUpdate(image_id, { isDeleted: true }, { new: true }).then((image) => {
        res.json(image)
    }).catch((err) => {
        res.send({ err })
    })
}