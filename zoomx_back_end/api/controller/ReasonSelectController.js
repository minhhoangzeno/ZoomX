const mongoose = require('mongoose'),
    ReasonSelect = mongoose.model('reasonSelect'),
    Upload = require('../model/UploadImageModel'),
    ImageUtil = require('../utils/ImageUtil');


exports.get_reason_select = (req, res) => {

    ReasonSelect.find()
        .populate({
            path: 'imageCover',
            model: 'image',
            select: 'url'
        })
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.send(error)
        })



}

exports.add_reason_select = (req, res) => {
    let uploadCover = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: req.files[0],
            path: 'ZoomX/ReasonSelect'
        }).then(result => {
            resolve(result)
        }).catch(err => {
            reject(null)
        })
    })
    uploadCover.then(result => {
        ReasonSelect.create({
            title: req.body.title,
            content: req.body.content,
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
exports.update_reason_select = (req, res) => {
    let id = req.params.reason_select_id;
    ReasonSelect.findById(id).exec().then(reasonSelect => {
        ImageUtil.updateSingeFile(req.files[0], reasonSelect.imageCover, 'ReasonSelect').then(() => {
            ReasonSelect.findByIdAndUpdate(id, {
                title: req.body.title,
                content: req.body.content,
            }).then(data => {
                res.send(data)
            }).catch(error => {
                res.send(error)
            })
        })
    })
}

exports.delete_reason_select = (req, res) => {
    let id = req.params.reason_select_id;
    ReasonSelect.findById(id).exec().then(async reasonSelect => {
        await ImageUtil.deleteSingleFile(reasonSelect.imageCover).then(() => {
            reasonSelect.remove()
        })
        res.send(reasonSelect)
    }).catch(error => {
        res.send(error)
    })
}

