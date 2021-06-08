const mongoose = require('mongoose'),
    ZoomX = mongoose.model('zoomx'),
    Upload = require('../model/UploadImageModel'),
    UploadFile = require('../model/UploadFileModel'),
    ImageUtil = require('../utils/ImageUtil'),
    FileUtil = require('../utils/FileUtil');


exports.get_zoomx = (req, res) => {
    ZoomX.find()
        .populate([
            {
                path: 'profile',
                model: 'file'
            },
            {
                path: 'imageCover',
                model: 'image'
            }
        ])
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.send(error)
        })
}

exports.add_zoomx = (req, res) => {
    let fileCover = req.files.filter(item => item.fieldname == 'imageCover');
    let filePDF = req.files.filter(item => item.fieldname == 'profile');
    let uploadCover = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: fileCover[0],
            path: 'ZoomX/ZoomX'
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
    let uploadPDF = new Promise((resolve, reject) => {
        UploadFile.uploadSingleFile({
            file: filePDF[0],
            path: 'ZoomX/ZoomX'
        }).then(resultFileBook => {
            resolve({
                profile: resultFileBook._id
            })
        }).catch(err => {
            reject({
                profile: null
            })
        })
    })
    Promise.all([uploadPDF, uploadCover]).then(result => {
        ZoomX.create({
            content: req.body.content,
            imageCover: result.filter(item => item.imageCover)[0]?.imageCover ? result.filter(item => item.imageCover)[0].imageCover : null,
            profile: result.filter(item => item.profile)[0]?.profile ? result.filter(item => item.profile)[0].profile : null
        }).then(data => {
            res.send(data)
        }).catch(error => {
            console.log(error)
        })
    }).catch(error => {
        res.send(error)
    })
}
exports.update_zoomx = async (req, res) => {
    let fileCover = req.files.filter(item => item.fieldname == 'imageCover')[0];
    let filePDF = req.files.filter(item => item.fieldname == 'profile')[0];
    let zoomx = await ZoomX.findById(req.params.zoomx_id)
    let updateCover = new Promise((resolve, reject) => {
        ImageUtil.updateSingeFile(fileCover, zoomx.imageCover, 'ZoomX').then(result => {
            resolve(result)
        }).catch(error => {
            reject(error)
        })
    })
    let updateFile = new Promise((resolve, reject) => {
        FileUtil.updateSingeFile(filePDF, zoomx.profile, 'ZoomX').then(result => {
            resolve(result)
        }).catch(error => {
            reject(error)
        })
    })

    Promise.all([updateCover, updateFile]).then(result => {
        console.log(result)
        ZoomX.findByIdAndUpdate(req.params.zoomx_id, {
            content: req.body.content
        }).then(data => {
            res.send(data)
        }).catch(error => {
            res.send(error)
        })
    }).catch(error => {
        console.log(error)
    })
}
exports.delete_zoomx = async (req, res) => {
    let zoomx = await ZoomX.findById(req.params.zoomx_id)
    let deleteImageCover = new Promise((resolve, reject) => {
        ImageUtil.deleteSingleFile(zoomx.imageCover).then(result => {
            resolve(result)
        }).catch(error => {
            res.send(error)
        })
    })
    let deleteFileBook = new Promise((resolve, reject) => {
        FileUtil.deleteSingleFile(zoomx.profile).then(result => {
            resolve(result)
        }).catch(error => {
            res.send(error)
        })
    })
    Promise.all([deleteFileBook, deleteImageCover]).then(() => {
        zoomx.remove();
        res.send("Xoa thanh cong")
    }).catch(error => {
        res.send(error)
    })
}