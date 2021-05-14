const mongoose = require('mongoose'),
    Recruitment = mongoose.model('recruitment'),
    Upload = require('../model/UploadImageModel');


exports.get_recruitment = (req, res) => {
    const getRecruitmentPromise = new Promise((resolve, reject) => {
        Recruitment.find({ isDeleted: false })
            .populate({
                path: 'imageRecruitment',
                model: 'image',
                select: 'url'
            })
            .then((recruitment) => {
                resolve(recruitment)
            })
            .catch((error) => {
                reject(error)
            })

    })
    getRecruitmentPromise.then((recruitment) => {
        res.send(recruitment)
    }).catch(err => {
        res.send({ err })
    })
}

exports.add_recruitment = (req, res) => {
    const newRecruitment = new Recruitment(req.body);
    const addPromise = new Promise((resolve, reject) => {
        newRecruitment.save()
            .then((recruitment) => {
                resolve(recruitment)
            })
            .catch(err => {
                reject(err)
            })
    })
    addPromise.then((recruitment) => {
        res.send(recruitment)
    }).catch(err => {
        res.send({ err })
    })
}
exports.upload_image_recruitment = (req, res) => {
    Upload.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/Recruitment'
    })
        .then(result => {
            const id = req.params.recruitment_id;
            const update_recruitment = new Promise((resolve, reject) => {
                Recruitment.findByIdAndUpdate(id, { imageRecruitment: result._id }, { new: true, useFindAndModify: false })
                    .then(investImg => {
                        resolve(investImg)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
            update_recruitment
                .then(investImg => {
                    res.send({ investImg })
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
exports.update_recruitment = (req, res) => {
    let id = req.params.recruitment_id;
    let objRecruitment = req.body;
    Recruitment.findByIdAndUpdate(id, objRecruitment)
        .then((recruitment) => {
            res.send(recruitment)
        })
        .catch(err => {
            res.send(err)
        })
}
exports.delete_recruitment = (req, res) => {
    Recruitment.findByIdAndDelete(req.params.recruitment_id)
        .then(recruitment => {
            res.send(recruitment)
        })
        .catch(err => {
            res.send(err)
        })
}
exports.get_a_recruitment = (req, res) => {
    Recruitment.findById(req.params.recruitment_id)
        .populate({
            path: 'imageRecruitment',
            model: 'image',
            select: 'url'
        })
        .then((recruitment) => {
            res.send(recruitment)
        })
        .catch((error) => {
            res.send(error)
        })
}