const LibraryLookupModel = require('../model/LibraryLookupModel');
const UpdateImageLibrary = require('../utils/library/UpdateImageLibrary');

const mongoose = require('mongoose'),
    LibraryImage = mongoose.model('libraryImage'),
    Upload = require('../model/UploadImageModel'),
    AddImageLibrary = require('../utils/library/AddImageLibrary')
    ;

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
    AddImageLibrary.addImageLibrary(req).then(result => {
        let objLibrary = {
            name:req.body.name,
            imageCover: result.filter(item => item.imageCover)[0]?.imageCover ? result.filter(item => item.imageCover)[0].imageCover : null,
            imageList: result.filter(item => item.imageList)[0]?.imageList ? result.filter(item => item.imageList)[0].imageList : null,
        }
        let newLibImage = new LibraryImage(objLibrary);
        newLibImage.save().then((libImage) => {
            res.send(libImage)
        }).catch(error => {
            res.send(error)
        })
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
}
exports.update_library_image = (req, res) => {
    UpdateImageLibrary.updateImageLibrary(req.params.library_image_id,req).then(result => {
        LibraryImage.findByIdAndUpdate(req.params.library_image_id,{
            name: req.body.name,
            imageCover: result.filter(item => item.imageCover)[0].imageCover,      
            imageList: result.filter(item => item.imageList)[0].imageList,
        }).exec().then(libImage => {
            res.send(libImage)
        })
    }).catch(error => {
        res.send(error)
    })
}
exports.delete_library_image = (req, res) => {
    AddImageLibrary.deleteImageLibrary(req.params.library_image_id).then(result => {
        res.send(result)
    }).catch(error => {
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