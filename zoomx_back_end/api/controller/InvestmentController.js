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
exports.upload_project_investment = (req, res) => {
    const projectPromise = new Promise((resolve, reject) => {
        Project.find({ typeInvestment: req.params.investment_id })
            .then((result) => {
                resolve(result)
                console.log(1)
            })
            .catch(err => {
                reject(err)
            })
    })
    projectPromise.then((result) => {
        const project = [];
        result.map(pj => {
            project.push({
                _id: pj._id,
                nameProject: pj._projectName

            })
        })
        Investment.findByIdAndUpdate(req.params.investment_id,{projectArr: project }, { new: true, useFindAndModify: false })
            .then(investment => {
                res.send(investment)
            })

    }).catch(err => {
        res.send({ err })
    })
}