const mongoose = require('mongoose'),
    Partner = mongoose.model('partner'),
    Upload = require('../model/UploadImageModel');


exports.get_partner = (req, res) => {
    const getPartnerPromise = new Promise((resolve, reject) => {
        Partner.find({ isDeleted: false })
            .populate({
                path: 'logo',
                model: 'image',
                select: 'url'
            })
            .then((partner) => {
                resolve(partner)
            })
            .catch((error) => {
                reject(error)
            })

    })
    getPartnerPromise.then((partner) => {
        res.send(partner)
    }).catch(err => {
        res.send({ err })
    })
}

exports.add_partner = (req, res) => {
    const newPartnet = new Partner(req.body);
    const addPromise = new Promise((resolve, reject) => {
        newPartnet.save()
            .then((partner) => {
                resolve(partner)
            })
            .catch(err => {
                reject(err)
            })
    })
    addPromise.then((partner) => {
        res.send(partner)
    }).catch(err => {
        res.send({ err })
    })
}
exports.upload_image_partner = (req, res) => {
    Upload.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/Partner'
    })
        .then(result => {
            const id = req.params.partner_id;
            const update_partner = new Promise((resolve, reject) => {
                Partner.findByIdAndUpdate(id, { logo: result._id }, { new: true, useFindAndModify: false })
                    .then(partner => {
                        resolve(partner)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
            update_partner
                .then(partner => {
                    res.send({ partner })
                })
                .catch(err => {
                    res.send({ err })

                })
        })
        .catch(error => {
            res.send({ error })
            console.log(error)
        })
}