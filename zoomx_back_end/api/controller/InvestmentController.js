
var mongoose = require('mongoose'),
    Investment = mongoose.model('investment'),
    Upload = require('../model/UploadImageModel'),
    Project = mongoose.model('project'),
    ImageUtil = require('../utils/ImageUtil')
    ;


exports.get_investment = (req, res) => {
    const getInvestmentPromise = new Promise((resolve, reject) => {
        Investment.find({ isDeleted: false })
            .populate([
                {
                    path: 'imageCover',
                    model: 'image',
                    select: 'url'
                },
                {
                    path: 'imageHero',
                    model: 'image',
                    select: 'url'
                }
            ])
            .then((investments) => {
                resolve(investments)
            })
            .catch((error) => {
                reject(error)
                console.log(error)
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
    let fileHero = req.files.filter(item => item.fieldname == 'imageHero');
    let uploadCover = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: fileCover[0],
            path: 'ZoomX/Investment'
        }).then(resultCover => {
            resolve({
                imageCover: resultCover._id
            })
        }).catch(err => {
            reject({
                imageCover: null
            })
        })
    })
    let uploadHero = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: fileHero[0],
            path: 'ZoomX/Investment'
        }).then(resultHero => {
            console.log("hero", resultHero)

            resolve({
                imageHero: resultHero._id
            })
        }).catch(err => {
            reject({
                imageHero: null
            })
        })
    })
    Promise.all([uploadHero, uploadCover]).then(result => {
        Investment.create({
            investmentName: req.body.investmentName,
            description: req.body.description,
            imageCover: result.filter(item => item.imageCover)[0].imageCover ? result.filter(item => item.imageCover)[0].imageCover : null,
            imageHero: result.filter(item => item.imageHero)[0].imageHero ? result.filter(item => item.imageHero)[0].imageHero : null
        }).then(investment => {
            res.send(investment)
        }).catch(error => {
            console.log(error)
        })
    }).catch(error => {
        res.send(error)
    })
}
exports.update_investment = async (req, res) => {
    let fileCover = req.files.filter(item => item.fieldname == 'imageCover')[0];
    let fileHero = req.files.filter(item => item.fieldname == 'imageHero')[0];
    let investment = await Investment.findById(req.params.investment_id)
    let updateCover = new Promise((resolve, reject) => {
        ImageUtil.updateSingeFile(fileCover, investment.imageCover, 'Investment').then(result => {
            resolve(result)
        }).catch(error => {
            reject(error)
        })
    })
    let updateHero = new Promise((resolve, reject) => {
        ImageUtil.updateSingeFile(fileHero, investment.imageHero, 'Investment').then(result => {
            resolve(result)
        }).catch(error => {
            reject(error)
        })
    })

    Promise.all([updateCover, updateHero]).then(result => {
        Investment.findByIdAndUpdate(req.params.investment_id, {
            investmentName: req.body.investmentName,
            description: req.body.description
        }).then(data => {
            res.send(data)
        }).catch(error => {
            res.send(error)
        })
    }).catch(error => {
        console.log(error)
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

