const mongoose = require('mongoose'),
    Hero = mongoose.model('hero'),
    Upload = require('../model/UploadImageModel');


exports.get_hero = (req, res) => {
    const getPartnerPromise = new Promise((resolve, reject) => {
        Hero.find()
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
    const newPartnet = new Hero(req.body);
    const addPromise = new Promise((resolve, reject) => {
        newPartnet.save()
            .then((hero) => {
                resolve(hero)
            })
            .catch(err => {
                reject(err)
            })
    })
    addPromise.then((hero) => {
        res.send(hero)
    }).catch(err => {
        res.send({ err })
    })
}

exports.upload_image_hero = (req, res) => {
    Upload.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/Hero'
    })
        .then(result => {
            const id = req.params.hero_id;
            const update_hero = new Promise((resolve, reject) => {
                Hero.findByIdAndUpdate(id, { imageCover: result._id }, { new: true, useFindAndModify: false })
                    .then(hero => {
                        resolve(hero)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
            update_hero
                .then(hero => {
                    res.send({ hero })
                })
                .catch(err => {
                    res.send({ err })

                })
        })
        .catch(error => {
            res.send({ error })
        })
}
exports.update_hero = (req, res) => {
    Hero.findByIdAndUpdate(req.params.hero_id, req.body)
        .then(hero => {
            res.send(hero)
        })
        .catch(err => {
            res.send(err)
        })
}
exports.delete_hero = (req,res) => {
    Hero.findByIdAndDelete(req.params.hero_id)
    .then(hero => {
        res.send(hero)
    })
    .catch(err => {
        res.send(err)
    })
}