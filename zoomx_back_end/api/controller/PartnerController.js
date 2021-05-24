const mongoose = require('mongoose'),
    Partner = mongoose.model('partner'),
    Upload = require('../model/UploadImageModel'),
    ImageUtil = require('../utils/ImageUtil')
    ;
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
exports.get_a_partner = (req, res) => {
    Partner.findById(req.params.partner_id)
        .populate({
            path: 'logo',
            model: 'image',
            select: 'url'
        })
        .then((partner) => {
            res.send(partner)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })

}
exports.add_partner = (req, res) => {
    let uploadLogo = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: req.files[0],
            path: 'ZoomX/Partner'
        }).then(logo => {
            resolve(logo)
        }).catch(err => {
            reject(null)
        })
    })
    uploadLogo.then(result => {
        Partner.create({
            name: req.body.name,
            logo: result._id
        }).then(partner => {
            res.send(partner)
        }).catch(error => {
            res.send(error)
        })
    }).catch(error => {
        res.send(error)
    })

}
exports.update_partner = (req, res) => {
    let id = req.params.partner_id;
    Partner.findById(id).exec().then(partner => {
        ImageUtil.updateSingeFile(req.files[0], partner.logo, 'Partner').then(() => {
            Partner.findByIdAndUpdate(id, {
                name: req.body.name,
            }).then(data => {
                res.send(data)
            }).catch(error => {
                res.send(error)
            })
        })
    })
}

exports.delete_partner = (req, res) => {
    let id = req.params.partner_id;
    Partner.findById(id).exec().then(async partner => {
        await ImageUtil.deleteSingleFile(partner.logo).then(() => {
            partner.remove()
        })
        res.send(partner)
    }).catch(error => {
        res.send(error)
    })
}

