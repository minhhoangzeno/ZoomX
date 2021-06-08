const ImageUtil = require('../utils/ImageUtil');

const mongoose = require('mongoose'),
    HeroProject = mongoose.model('heroProject'),
    Upload = require('../model/UploadImageModel');


exports.get_hero = (req, res) => {
    const getPartnerPromise = new Promise((resolve, reject) => {
        HeroProject.find()
            .populate({
                path: 'imageCover',
                model: 'image',
                select: 'url'
            })
            .then((hero) => {
                resolve(hero)
            })
            .catch((error) => {
                reject(error)
            })

    })
    getPartnerPromise.then((hero) => {
        res.send(hero)
    }).catch(err => {
        res.send({ err })
    })
}

exports.add_hero = (req, res) => {
    let uploadCover = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: req.files[0],
            path: 'ZoomX/Hero/Project'
        }).then(imageCover => {
            resolve(imageCover)
        }).catch(err => {
            reject(null)
        })
    })
    uploadCover.then(result => {
        HeroProject.create({
            title: req.body.title,
            label: req.body.label,
            imageCover: result._id
        }).then(hero => {
            res.send(hero)
        }).catch(error => {
            res.send(error)
        })
    }).catch(error => {
        res.send(error)
    })
}

exports.update_hero = (req, res) => {
    let id = req.params.hero_id;
    HeroProject.findById(id).exec().then(hero => {
        ImageUtil.updateSingeFile(req.files[0], hero.imageCover, 'Hero/Project').then(() => {
            HeroProject.findByIdAndUpdate(id, {
                title: req.body.title,
                label: req.body.label
            }).then(data => {
                res.send(data)
            }).catch(error => {
                res.send(error)
            })
        })
    })
}
exports.delete_hero = (req, res) => {
    let id = req.params.hero_id;
    HeroProject.findById(id).exec().then(async hero => {
        await ImageUtil.deleteSingleFile(hero.imageCover).then(() => {
            hero.remove()
        })
        res.send(hero)
    }).catch(error => {
        res.send(error)
    })
}

