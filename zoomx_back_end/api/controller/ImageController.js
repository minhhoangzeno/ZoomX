var mongoose = require('mongoose'),
    Image = mongoose.model('image'),
    Upload = require('../model/UploadImageModel'),
    cloudinary = require('cloudinary').v2
    ;

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
        res.send(images)
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
    Image.findById(req.params.image_id).exec()
        .then(async (image) => {
            await cloudinary.uploader.destroy(image.imageId);
            Upload.uploadSingleFile({
                file:req.files[0],
                path:'ZoomX/Image'
            }).then(async img => {
                await Image.findByIdAndUpdate(image._id,{
                    imageName:img.imageName,
                    url:img.url,
                    imageId:img.imageId
                })
                res.send(img)
            })
            .catch(error => {
                res.send(error)
                console.log(error)
            })
        })
}

/**
 * 
 */
exports.delete_image = (req, res) => {
    Image.findById(req.params.image_id).exec()
        .then(async (image) => {
            await cloudinary.uploader.destroy(image.imageId);
            await image.remove()
            res.send(image)
        }).catch(error => {
            res.send(error)
        })
}