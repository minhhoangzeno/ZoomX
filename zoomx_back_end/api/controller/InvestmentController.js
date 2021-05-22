
var mongoose = require('mongoose'),
    Investment = mongoose.model('investment'),
    Upload = require('../model/UploadImageModel'),
    Project = mongoose.model('project'),
    ImageUtil = require('../utils/ImageUtil')
    ;


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
    let fileCover = req.files.filter(item => item.fieldname == 'imageCover');
    let uploadCover = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: fileCover[0],
            path: 'ZoomX/Investment'
        }).then(resultCover => {
            resolve(resultCover)
        }).catch(err => {
            reject(null)
        })
    })
    uploadCover.then(result => {
        Investment.create({
            investmentName: req.body.investmentName,
            description: req.body.description,
            imageCover: result._id
        }).then(investment => {
            res.send(investment)
        }).catch(error => {
            res.send(error)
        })
    }).catch(error => {
        res.send(error)
    })

}
exports.update_investment = (req, res) => {
    let id = req.params.investment_id;
    let fileCover = req.files.filter(item => item.fieldname == 'imageCover')[0];
    Investment.findById(id).exec().then(investment => {
        ImageUtil.updateSingeFile(fileCover, investment.imageCover, 'Investment').then(result => {
            Investment.findByIdAndUpdate(id, {
                investmentName: req.body.investmentName,
                description: req.body.description
            }).then(inv => {
                res.send(inv)
            }).catch(error => {
                res.send(error)
            })
        })
    })

}
exports.delete_investment = (req, res) => {
    let id = req.params.investment_id;
    Investment.findByIdAndUpdate(id, { isDeleted: true }).exec()
        .then(investment => {
            console.log(investment)
            Project.find({
                typeInvestment: investment._id
            }).then(result => {
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
            res.send(investment)
        })
        .catch(err => {
            res.send(err)
        })

}

