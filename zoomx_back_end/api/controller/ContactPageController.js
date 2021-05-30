const mongoose = require('mongoose'),
    ContactPage = mongoose.model('contactPage'),
    Upload = require('../model/UploadImageModel'),
    ImageUtil = require('../utils/ImageUtil');

exports.get_contact = (req, res) => {
    ContactPage.find({}).populate({
        path: 'imageCover',
        model: 'image',
        select: 'url'
    }).then(data => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })
}

exports.add_contact = (req, res) => {
    let uploadCover = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: req.files[0],
            path: 'ZoomX/Contact'
        }).then(imageCover => {
            resolve(imageCover)
        }).catch(err => {
            reject(null)
        })
    })
    uploadCover.then(result => {
        ContactPage.create({
            title: req.body.title,
            content: req.body.content,
            imageCover: result._id,
            address: req.body.address,
            city: req.body.city,
            email: req.body.email,
            numberPhone: req.body.numberPhone,
            timeHotline: req.body.timeHotline,
            numberHotline: req.body.numberHotline
        }).then(hero => {
            res.send(hero)
        }).catch(error => {
            res.send(error)
        })
    }).catch(error => {
        res.send(error)
    })
}

exports.update_contact = (req, res) => {
    let id = req.params.contact_page_id;
    ContactPage.findById(id).exec().then(contact => {
        ImageUtil.updateSingeFile(req.files[0], contact.imageCover, 'Contact').then(() => {
            ContactPage.findByIdAndUpdate(id, {
                title: req.body.title,
                content: req.body.content,
                address: req.body.address,
                city: req.body.city,
                email: req.body.email,
                numberPhone: req.body.numberPhone,
                timeHotline: req.body.timeHotline,
                numberHotline: req.body.numberHotline
            }).then(data => {
                res.send(data)
            }).catch(error => {
                res.send(error)
            })
        })
    })
}

exports.delete_contact = (req, res) => {
    let id = req.params.contact_page_id;
    ContactPage.findById(id).exec().then(async contact => {
        await ImageUtil.deleteSingleFile(contact.imageCover).then(() => {
            contact.remove()
        })
        res.send(contact)
    }).catch(error => {
        res.send(error)
    })
}