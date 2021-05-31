const ImageUtil = require('../utils/ImageUtil');

const mongoose = require('mongoose'),
    LibraryLookup = mongoose.model('librarylookup'),
    Upload = require('../model/UploadImageModel'),
    UploadFile = require('../model/UploadFileModel');

exports.get_library_lookup = (req, res) => {
    LibraryLookup.find()
        .populate([
            {
                path: 'fileBook',
                model: 'file'
            },
            {
                path: 'imageCover',
                model: 'image'
            }
        ])
        .then(lookup => {
            res.send(lookup)
        })
        .catch(error => {
            res.send(error)
        })
}

exports.add_library_lookup = (req, res) => {
    let fileCover = req.files.filter(item => item.fieldname == 'imageCover');
    let filePDF = req.files.filter(item => item.fieldname == 'fileBook');
    let uploadCover = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: fileCover[0],
            path: 'ZoomX/Library/LookUp'
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
            path: 'ZoomX/Library/LookUp'
        }).then(resultFileBook => {
            resolve({
                fileBook: resultFileBook._id
            })
        }).catch(err => {
            reject({
                fileBook: null
            })
        })
    })
    Promise.all([uploadPDF, uploadCover]).then(result => {
        LibraryLookup.create({
            name: req.body.name,
            imageCover: result.filter(item => item.imageCover)[0]?.imageCover ? result.filter(item => item.imageCover)[0].imageCover : null,
            fileBook: result.filter(item => item.fileBook)[0]?.fileBook ? result.filter(item => item.fileBook)[0].fileBook : null
        }).then(libLookup => {
            res.send(libLookup)
        }).catch(error => {
            console.log(error)
        })
    }).catch(error => {
        res.send(error)
    })
}
exports.update_library_lookup = async (req, res) => {
    let fileCover = req.files.filter(item => item.fieldname == 'imageCover')[0];
    let filePDF = req.files.filter(item => item.fieldname == 'fileBook')[0];
    let libraryLookup = await LibraryLookup.findById(req.params.library_lookup_id)
    let updateCover = new Promise((resolve, reject) => {
        ImageUtil.updateSingeFile(fileCover, libraryLookup.imageCover, 'Library/LookUp').then(result => {
            resolve(result)
        }).catch(error => {
            reject(error)
        })
    })
    let updateFile = new Promise((resolve, reject) => {
        ImageUtil.updateSingeFile(filePDF, libraryLookup.imageCover, 'Library/LookUp').then(result => {
            resolve(result)
        }).catch(error => {
            reject(error)
        })
    })

    Promise.all([updateCover, updateFile]).then(result => {
        LibraryLookup.findByIdAndUpdate(req.params.library_lookup_id, {
            name: req.body.name
        }).then(data => {
            res.send(data)
        }).catch(error => {
            res.send(error)
        })
    }).catch(error => {
        console.log(error)
    })
}
exports.delete_library_lookup = async (req, res) => {
    let libraryLookup = await LibraryLookup.findById(req.params.library_lookup_id)
    let deleteImageCover = new Promise((resolve,reject) => {
        ImageUtil.deleteSingleFile(libraryLookup.imageCover).then(result => {
            resolve(result)
        }).catch(error => {
            res.send(error)
        })
    })
    let deleteFileBook = new Promise((resolve,reject) => {
        ImageUtil.deleteSingleFile(libraryLookup.fileBook).then(result => {
            resolve(result)
        }).catch(error => {
            res.send(error)
        })
    })
    Promise.all([deleteFileBook,deleteImageCover]).then(() => {
        libraryLookup.remove();
        res.send("Xoa thanh cong")
    }).catch(error => {
        res.send(error)
    })
}