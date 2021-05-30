const mongoose = require('mongoose'),
    DefineHome = mongoose.model('defineHome'),
    Upload = require('../model/UploadImageModel'),
    ImageUtil = require('../utils/ImageUtil');


exports.get_define_home = (req, res) => {

    DefineHome.find()
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

exports.add_define_home = (req, res) => {
    let uploadCover = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: req.files[0],
            path: 'ZoomX/DefineHome'
        }).then(result => {
            resolve(result)
        }).catch(err => {
            reject(null)
        })
    })
    uploadCover.then(result => {
        DefineHome.create({
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
exports.update_define_home = (req, res) => {
    let id = req.params.define_home_id;
    DefineHome.findById(id).exec().then(defineHome => {
        ImageUtil.updateSingeFile(req.files[0], defineHome.imageCover, 'DefineHome').then(() => {
            DefineHome.findByIdAndUpdate(id, {
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

exports.delete_define_home = (req, res) => {
    let id = req.params.define_home_id;
    DefineHome.findById(id).exec().then(async defineHome => {
        await ImageUtil.deleteSingleFile(defineHome.imageCover).then(() => {
            defineHome.remove()
        })
        res.send(defineHome)
    }).catch(error => {
        res.send(error)
    })
}

