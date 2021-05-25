const ImageUtil = require('../utils/ImageUtil');

const mongoose = require('mongoose'),
    LibraryVideo = mongoose.model('libraryvideo'),
    Upload = require('../model/UploadImageModel');

exports.get_libraryvideo = (req, res) => {
    LibraryVideo.find({ isDeleted: false })
        .populate({
            path: 'imageCover',
            model: 'image',
            select: 'url'
        })
        .then(lb => {
            res.send(lb)
        })
        .catch(err => {
            res.send(err)
        })
}
exports.add_libraryvideo = (req, res) => {
    let uploadCover = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: req.files[0],
            path: 'ZoomX/Library/Video'
        }).then(imageCover => {
            resolve(imageCover)
        }).catch(err => {
            reject(null)
        })
    })
    uploadCover.then(result => {
        LibraryVideo.create({
            name: req.body.name,
            videoUrl: req.body.videoUrl,
            imageCover: result._id
        }).then(libVideo => {
            res.send(libVideo)
        }).catch(error => {
            res.send(error)
        })
    }).catch(error => {
        res.send(error)
    })
}

exports.update_library_video = (req, res) => {
    let id = req.params.libary_video_id;
    LibraryVideo.findById(id).exec().then(libVideo => {
        ImageUtil.updateSingeFile(req.files[0], libVideo.imageCover, 'Library/Video').then(() => {
            LibraryVideo.findByIdAndUpdate(id, {
                name: req.body.name,
                videoUrl: req.body.videoUrl
            }).then(data => {
                res.send(data)
            }).catch(error => {
                res.send(error)
            })
        })
    })
}
exports.delete_library_video = (req, res) => {
    let id = req.params.libary_video_id;
    LibraryVideo.findById(id).exec().then(async libVideo => {
        await ImageUtil.deleteSingleFile(libVideo.imageCover).then(() => {
            libVideo.remove()
        })
        res.send(hero)
    }).catch(error => {
        res.send(error)
    })
}
