
const mongoose = require('mongoose'),
    User = mongoose.model('user'),
    bcrypt = require('bcrypt'),
    Upload = require('../model/UploadImageModel'),
    ImageUtil = require('../utils/ImageUtil')
    ;

exports.get_user = (req, res) => {
    User.find()
        .populate({
            path: 'avatar',
            model: 'image',
            select: 'url'
        })
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.send(err)
        })
}

exports.add_user = (req, res) => {
    let uploadAvatar = new Promise((resolve, reject) => {
        Upload.uploadSingleFile({
            file: req.files[0],
            path: 'ZoomX/Admin'
        }).then(avatar => {
            resolve(avatar)
        }).catch(error => {
            reject(null)
        })
    })
    uploadAvatar.then(result => {
        User.create({
            username: req.body.username,
            password: req.body.password,
            displayName: req.body.displayName,
            avatar: result._id,
            isAdmin: req.body.isAdmin
        }).then(data => {
            User.findById(data?._id)
                .populate({
                    path: 'avatar',
                    model: 'image',
                    select: 'url'
                }).then(user => {
                    res.send(user)
                })
        }).catch(err => {
            res.send(err)
        })
    })

}

exports.login_user = (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    User.findById(user?._id)
                        .populate({
                            path: 'avatar',
                            model: 'image',
                            select: 'url'
                        }).then(data => {
                            res.send(data)
                        })
                } else {
                    res.send(null)
                }
            })
        } else {
            res.send(null)
        }
    })
}
exports.delete_user = (req, res) => {
    let id = req.params.user_id;
    User.findById(id).exec().then(async user => {
        await ImageUtil.deleteSingleFile(user.avatar).then(() => {
            user.remove()
        })
        res.send(user)
    }).catch(err => {
        res.send(err)
    })
}

exports.set_role_user = (req, res) => {
    let id = req.params.user_id;
    let role = req.body.role;
    User.findByIdAndUpdate(is, { isAdmin: role }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

exports.update_user = (req, res) => {
    let id = req.params.user_id;
    User.findById(id).exec().then(user => {
        ImageUtil.updateSingeFile(req.files[0], user.avatar, 'User').then(() => {
            User.findByIdAndUpdate(id, {
                password: req.body.password,
                displayName: req.body.displayName,
                avatar: result._id
            }).then(data => {
                res.send(data)
            }).catch(error => {
                res.send(error)
            })
        })
    })
}