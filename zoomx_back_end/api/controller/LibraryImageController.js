const LibraryLookupModel = require('../model/LibraryLookupModel');

const mongoose = require('mongoose'),
    LibraryImage = mongoose.model('libraryImage'),
    Upload = require('../model/UploadImageModel');

exports.get_library_image = (req, res) => {
    LibraryImage.find({ isDeleted: false })
        .populate([
            {
                path: 'imageCover',
                model: 'image',
                select: 'url'
            },
            {
                path: 'imageList',
                populate: {
                    path: 'imageList',
                    model: 'image',
                    select: 'url'
                },
                select: 'url'
            },
        ])
        .then(lb => {
            res.send(lb)
        })
        .catch(error => {
            res.send(error)
        })
}
exports.add_librare_image = (req, res) => {
    let objLibraryImage = new LibraryImage(req.body);
    const addPromise = new Promise((resolve, reject) => {
        objLibraryImage.save()
            .then(result => {
                resolve(result)
            })
            .catch(err => {
                res.send(err)
            })
    })
    addPromise.then(lb => {
        res.send(lb)
    })
        .catch(error => {
            res.send(error)
        })
}
exports.update_library_image = (req, res) => {
    let id = req.params.library_image_id;
    LibraryImage.findByIdAndUpdate(id, req.body)
        .then(lb => {
            res.send(lb)
        })
        .catch(error => {
            res.send(error)
        })
}
exports.delete_library_image = (req, res) => {
    let id = req.params.library_image_id;
    LibraryImage.findByIdAndUpdate(id, { isDeleted: true })
        .then(lb => {
            res.send(lb)
        })
        .catch(error => {
            res.send(error)
        })
}
exports.upload_image_cover = (req, res) => {
    const id = req.params.library_image_id;
    Upload.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/Library/Image/ImageCover'
    }).then((result) => {
        const update_library_image = new Promise((resolve, reject) => {
            LibraryImage.findByIdAndUpdate(id, { imageCover: result._id }, { new: true, useFindAndModify: false })
                .then(lb => {
                    resolve(lb)
                })
                .catch(err => {
                    reject(err)
                })
        })
        update_library_image.then(lk => {
            res.send(lk)
        }).catch(er => {
            res.send(er)
        })
    }).catch(error => {
        res.send(error)
    })
}
exports.upload_image_list = (req, res) => {
    Upload.uploadMultipleFile({
        file: req.files,
        path: 'ZoomX/Library/Image/ImageList'
    }).then((result) => {
        const image_id = []
        result.map(image => {
            image_id.push(image._id)
        })
        const id = req.params.project_id
        const update_library_image = new Promise((resolve, reject) => {
            LibraryLookupModel.findByIdAndUpdate(id, { imageList: image_id }, { new: true, useFindAndModify: false })
                .then((lk) => {
                    resolve(lk)
                }).catch((error) => {
                    reject(error)
                })
        })
        update_library_image
            .then((imgList) => {
                res.send(imgList)
            }).catch((error) => {
                res.send({ error })
            })
    }).catch((error) => {
        res.send({ error })
    })
}