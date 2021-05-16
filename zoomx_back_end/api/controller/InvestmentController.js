var mongoose = require('mongoose'),
    Investment = mongoose.model('investment'),
    Upload = require('../model/UploadImageModel'),
    Project = mongoose.model('project');


exports.get_investment = (req, res) => {
    const getInvestmentPromise = new Promise((resolve, reject) => {
        Investment.find({ isDeleted: false })
            .populate({
                path: 'imageCover',
                model: 'image',
                select: 'url'
            })
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
exports.update_investment = (req, res) => {
    let id = req.params.investment_id;
    let objInvestment = req.body;
    Investment.findByIdAndUpdate(id, objInvestment)
        .then(investment => {
            res.send(investment)
        })
        .catch(err => {
            res.send(err)
        })
}
exports.delete_investment = (req, res) => {
    let id = req.params.investment_id;
    Investment.findByIdAndUpdate(id, { isDeleted: true })
        .then(investment => {
            Project.find({
                typeInvestment: investment._id
            }).then(result => {
                console.log(result)
                result.map((pj) => {
                    Project.findByIdAndUpdate(pj._id, {
                        typeInvestment: null
                    }).then(project => {
                        res.send(project)
                    }).catch(error => {
                        res.send(error)
                    })
                })
            }).catch(err => {
                res.send(err)
            })
        })
        .catch(err => {
            res.send(err)
        })
    
}
exports.upload_image_actor = (req, res) => {
    Upload.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/Investment'
    })
        .then(result => {
            const id = req.params.investment_id;
            console.log(id)
            console.log(result._id)
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

