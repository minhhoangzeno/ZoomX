const ImageUtil = require('../utils/ImageUtil');

const mongoose = require('mongoose'),
    Video = mongoose.model('video'),
    Upload = require('../model/UploadImageModel')
    ;

exports.get_video = (req, res) => {
    Video.find()
        .populate({
            path: 'imageCover',
            model: 'image',
            select:'url'
        })
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.send(err)
        })
}
exports.add_video = (req, res) => {
    let uploadLogo = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: req.files[0],
            path: 'ZoomX/Video'
        }).then(logo => {
            resolve(logo)
        }).catch(err => {
            reject(null)
        })
    })
    uploadLogo.then(result => {
        Video.create({
            videoUrl: req.body.videoUrl,
            imageCover: result._id
        }).then(data => {
            res.send(data)
        }).catch(error => {
            res.send(error)
        })
    }).catch(error => {
        res.send(error)
    })
}
exports.delete_video =  (req, res) => {
    let id = req.params.video_id;
    Video.findById(id).exec().then(async video => {
        await ImageUtil.deleteSingleFile(video.imageCover).then(() => {
            video.remove()
        })
        res.send(partner)
    }).catch(error => {
        res.send(error)
    })
}