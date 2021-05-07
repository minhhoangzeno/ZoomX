var mongoose = require('mongoose'),
    Investment = mongoose.model('investment');
const Upload = require('../model/UploadImageModel')
exports.get_investment = (req, res) => {
    const getInvestmentPromise = new Promise((resolve, reject) => {
        Investment.find({ isDeleted: false })
            .populate([{
                path: 'image',
                model: 'image'
            }])
            .then((investments) => {
                resolve(investments)
            })
            .catch((error) => {
                reject(error)
            })
    })
    getInvestmentPromise.then((investments) => {
        res.send(investments)
    }).catch(err => {
        res.send({ err })
    })
}

exports.add_investment = (req, res) => {
    const newInvestment = new Investment(req.body);
    const addPromise = new Promise((resolve, reject) => {
        newInvestment.save()
            .then((investments) => {
                resolve(investments)
            })
            .catch(err => {
                reject(err)
            })
    })
    addPromise.then((investments) => {
        res.send(investments)
    }).catch(err => {
        res.send({ err })
    })
}
exports.upload_image_actor = (req, res) => {
    Upload.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/Investment'
    })
        .then(result => {
            const id = result.params.investment_id;
            const update_investment = new Promise((resolve, reject) => {
                Investment.findByIdAndUpdate(id, { imageCover: result._id }, { new: true, useFindAndModify: false })
                    .then(investImg => {
                        resolve(investImg)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
            update_investment
                .then(investImg => {
                    resolve(investImg)
                })
                .catch(err => {
                    reject(err)
                })
        })
        .catch(error => {
            res.send({ error })
        })
}