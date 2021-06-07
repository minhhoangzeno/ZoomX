const mongoose = require('mongoose'),
    Icon = mongoose.model('icon'),
    Upload = require('../model/UploadImageModel'),
    ImageUtil = require('../utils/ImageUtil')
    ;

exports.get_icon = (req, res) => {
    Icon.find()
        .populate({
            path: 'imageCover',
            model: 'image',
            select: 'url'
        }).then(data => {
            res.send(data)
        }).catch(err => {
            res.send(err)
        })
}

exports.add_icon = (req, res) => {
    let uploadLogo = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: req.files[0],
            path: 'ZoomX/Footer'
        }).then(logo => {
            resolve(logo)
        }).catch(err => {
            reject(null)
        })
    })
    uploadLogo.then(result => {
        Icon.create({
            url: req.body.url,
            imageCover: result._id
        }).then(partner => {
            res.send(partner)
        }).catch(error => {
            res.send(error)
        })
    }).catch(error => {
        res.send(error)
    })

}
exports.update_icon = (req, res) => {
    let id = req.params.icon_id;
    Icon.findById(id).exec().then(icon => {
        ImageUtil.updateSingeFile(req.files[0], icon.imageCover, 'Footer').then(() => {
            Icon.findByIdAndUpdate(id, {
                url: req.body.url,
            }).then(data => {
                res.send(data)
            }).catch(error => {
                res.send(error)
            })
        })
    })
}

exports.delete_icon = (req, res) => {
    let id = req.params.icon_id;
    Icon.findById(id).exec().then(async icon => {
        await ImageUtil.deleteSingleFile(icon.imageCover).then(() => {
            icon.remove()
        })
        res.send(icon)
    }).catch(error => {
        res.send(error)
    })
}


