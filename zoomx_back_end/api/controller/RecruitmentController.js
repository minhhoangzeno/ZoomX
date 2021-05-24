const ImageUtil = require('../utils/ImageUtil');

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
    let imageRecruitment = req.files.filter(item => item.fieldname == 'imageRecruitment');
    let uploadRecruitment = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: imageRecruitment[0],
            path: 'ZoomX/Recruitment'
        }).then(resultRecruitment => {
            resolve(resultRecruitment)
        }).catch(err => {
            reject(null)
        })
    })
    uploadRecruitment.then(result => {
        Recruitment.create({
            title: req.body.title,
            address: req.body.address,
            rank: req.body.rank,
            typeRank: req.body.typeRank,
            experience: req.body.experience,
            salary: req.body.salary,
            career: req.body.career,
            dateReceived: req.body.dateReceived,
            imageRecruitment: result._id,
            welfare: req.body.welfare,
            description: req.body.description,
            requestCareer: req.body.requestCareer,
        }).then(recruitment => {
            res.send(recruitment)
        }).catch(error => {
            res.send(error)
        })
    }).catch(error => {
        res.send(error)
        console.log(error)
    })

}

exports.update_recruitment = (req, res) => {
    let id = req.params.recruitment_id;
    let imageRecruitment = req.files.filter(item => item.fieldname == 'imageRecruitment')[0];
    Recruitment.findById(id).exec().then(recruitment => {
        ImageUtil.updateSingeFile(imageRecruitment, recruitment.imageRecruitment, 'Recruitment').then(result => {
            Recruitment.findByIdAndUpdate(id, {
                title: req.body.title,
                address: req.body.address,
                rank: req.body.rank,
                typeRank: req.body.typeRank,
                experience: req.body.experience,
                salary: req.body.salary,
                career: req.body.career,
                dateReceived: req.body.dateReceived,
                welfare: req.body.welfare,
                description: req.body.description,
                requestCareer: req.body.requestCareer
            }).then(rec => {
                res.send(rec)
            }).catch(error => {
                res.send(error)
            })
        })
    })
}
exports.delete_recruitment = (req, res) => {
    let id = req.params.recruitment_id;
    Recruitment.findById(id).exec().then(async recruitment => {
        await ImageUtil.deleteSingleFile(recruitment.imageRecruitment).then(() => {
            recruitment.remove()
        })
        res.send(recruitment)
    }).catch(error => {
        res.send(error)
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