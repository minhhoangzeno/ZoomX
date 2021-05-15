const mongoose = require('mongoose'),
    LibraryVideo = mongoose.model('library'),
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
    let objVideo = new LibraryVideo(req.body)
    let addPromise = new Promise((resolve, reject) => {
        objVideo.save()
            .then(result => {
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
    })
    addPromise.then(lb => {
        res.send(lb)
    })
        .catch(err => {
            res.send(err)
        })
}

exports.upload_image_library_video = (req, res) => {
    Upload.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/Library/Video'
    })
        .then(result => {
            const id = req.params.library_video_id;
            const update_library_video = new Promise((resolve, reject) => {
                LibraryVideo.findByIdAndUpdate(id, { imageCover: result._id }, { new: true, useFindAndModify: false })
                    .then(lb => {
                        resolve(lb)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
            update_library_video
                .then(lb => {
                    res.send({ lb })
                })
                .catch(err => {
                    res.send({ err })

                })
        })
        .catch(error => {
            res.send({ error })
        })
}
exports.update_library_video = (req, res) => {
    LibraryVideo.findByIdAndUpdate(req.params.library_video_id, req.body)
        .then(lb => {
            res.send(lb)
        })
        .catch(err => {
            res.send(err)
        })
}
exports.delete_library_video = (req, res) => {
    LibraryVideo.findByIdAndUpdate(req.params.library_video_id, { isDeleted: true })
        .then(lb => {
            res.send(lb)
        })
        .catch(err => {
            res.send(err)
        })
}
