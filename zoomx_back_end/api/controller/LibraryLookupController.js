const mongoose = require('mongoose'),
    LibraryLookup = mongoose.model('libraryLookup'),
    Upload = require('../model/UploadImageModel'),
    UploadFile = require('../model/UploadFileModel');

exports.get_library_lookup = (req, res) => {
    LibraryLookup.find({ isDeleted: false })
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
    let objLibraryLookup = new LibraryLookup(req.body);
    let addPromise = new Promise((resolve, reject) => {
        objLibraryLookup.save()
            .then(lk => {
                resolve(lk)
            })
            .catch(err => {
                reject(err)
            })
    })
    addPromise.then(lookup => {
        res.send(lookup)
    })
        .catch(error => {
            res.send(error)
        })
}
exports.upload_image_library_lookup = (req, res) => {
    const id = req.params.library_lookup_id;
    Upload.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/Library/Video/ImageCover'
    }).then((result) => {
        const update_library_lookup = new Promise((resolve, reject) => {
            LibraryLookup.findByIdAndUpdate(id, { imageCover: result._id }, { new: true, useFindAndModify: false })
                .then(lb => {
                    resolve(lb)
                })
                .catch(err => {
                    reject(err)
                })
        })
        update_library_lookup.then(lk => {
            res.send(lk)
        }).catch(er => {
            res.send(er)
        })
    }).catch(error => {
        res.send(error)
    })
}
exports.upload_file_library_lookup = (req, res) => {
    const id = req.params.library_lookup_id;
    UploadFile.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/Library/Video/File'
    }).then((result) => {
        const update_library_lookup = new Promise((resolve, reject) => {
            LibraryLookup.findByIdAndUpdate(id, { fileBook: result._id }, { new: true, useFindAndModify: false })
                .then(lb => {
                    resolve(lb)
                })
                .catch(err => {
                    reject(err)
                })
        })
        update_library_lookup.then(lk => {
            res.send(lk)
        }).catch(er => {
            res.send(er)
        })
    }).catch(error => {
        res.send(error)
    })
}
exports.update_library_lookup = (req, res) => {
    LibraryLookup.findByIdAndUpdate(req.params.library_lookup_id, req.body)
        .then(lookup => {
            res.send(lookup)
        })
        .catch(error => {
            res.send(error)
        })
}
exports.delete_library_lookup = (req, res) => {
    LibraryLookup.findByIdAndUpdate(req.params.library_lookup_id, { isDeleted: true })
        .then(lookup => {
            res.send(lookup)
        })
        .catch(error => {
            res.send(error)
        })
}