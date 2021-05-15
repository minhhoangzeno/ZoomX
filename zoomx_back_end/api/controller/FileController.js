const mongoose = require('mongoose'),
    File = mongoose.model('file'),
    UploadFile = require('../model/UploadFileModel');

exports.get_file = (req, res) => {
    const getFilePromise = new Promise((resolve, reject) => {
        File.find()
            .then((files) => {
                resolve(files)
            })
            .catch((err) => {
                reject(err)
            })
    })
    getFilePromise.then((files) => {
        res.send({ files })
    })
        .catch((err) => {
            res.send({ err })
        })
}

exports.add_a_file = (req, res) => {
    Upload.uploadSingleFile({
        file: req.files[0],
        path: 'ZoomX/File'
    }).then((ImageDetail) => {
        res.send({ ImageDetail })
    }).catch((err) => {
        res.send({ err })
    })
}

// exports.add_images = (req, res) => {
//     Upload.uploadMultipleFile({
//         files: req.files,
//         path: 'Movie_Introduce/Image'
//     }).then((arrImg) => {
//         res.send({ arrImg })
//     }).catch((err) => {
//         res.send({ err })
//     })

// }


exports.update_file = (req, res) => {
    const file_id = req.params.file_id;
    File.findById(file_id).then((file) => {
        Cloudinary.uploadSingle(req.files[0].path).then((result) => {
            console.log(result);
            file.fileName = result.name
            file.fileUrl = result.url
            file.fileId = result.id
            file.save()
                .then((imageSaved) => {
                    res.send({ imageSaved })
                }).catch((error) => {
                    res.send({ error })
                })
        }).catch((error) => {
            res.send({ error })
        })
    })
}

/**
 * 
 */
exports.delete_file = (req, res) => {
    const file_id = req.params.file_id;
    File.findByIdAndUpdate(file_id, { new: true }).then((image) => {
        res.json(image)
    }).catch((err) => {
        res.send({ err })
    })
}