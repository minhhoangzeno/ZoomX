const mongoose = require('mongoose'),
    PersonRecruitment = mongoose.model('personRecruitment'),
    UploadFile = require('../model/UploadFileModel');

exports.get_person_recruitment = (req, res) => {
    PersonRecruitment.find({})
        .populate({
            path: 'fileCv',
            model: 'file',
            select: 'fileUrl'
        })
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
};

exports.add_person_recruitment = (req, res) => {
    const newPersonRecruitment = new PersonRecruitment(req.body);
    let addPromise = new Promise((result, reject) => {
        newPersonRecruitment.save()
            .then(person => {
                result(person)
            })
            .catch(err => {
                reject(err)
            })
    })
    addPromise.then((ps) => {
        res.send(ps)
    })
        .catch(error => {
            res.send(error)
        })
}

exports.upload_file_person_recruitment = (req, res) => {
    const id = req.params.person_recruitment_id;
    UploadFile.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/PersonRecruitment/FilePDF'
    }).then((result) => {
        const update_person_recruitment = new Promise((resolve, reject) => {
            PersonRecruitment.findByIdAndUpdate(id, { fileCv: result._id }, { new: true, useFindAndModify: false })
                .then(pdf => {
                    resolve(pdf)
                })
                .catch(err => {
                    reject(err)
                })
        })
        update_person_recruitment.then(rj => {
            res.send(rj)
        }).catch(er => {
            res.send(er)
        })
    }).catch(error => {
        res.send(error)
    })
}
exports.update_person_recruitment = (req, res) => {
    let id = req.params.person_recruitment_id;
    let newObj = req.body;
    PersonRecruitment.findByIdAndUpdate(id, newObj)
        .then(result => {
            res.send(result)
        })
        .catch(error => {
            res.send(error)
        })
}

exports.delete_person_recruitment = (req, res) => {
    let id = req.params.person_recruitment_id;
    PersonRecruitment.findByIdAndDelete(id)
        .then(result => {
            res.send(result)
        })
        .catch(error => {
            res.send(error)
        })

}