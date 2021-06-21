const mongoose = require('mongoose'),
    Setting = mongoose.model('setting');

exports.get_setting = (req, res) => {
    Setting.find().then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

exports.add_setting = (req, res) => {
    Setting.create({
        phone: req.body.phone,
        mail: req.body.mail
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

exports.update_setting = (req, res) => {
    Setting.findByIdAndUpdate(req.params.setting_id, {
        phone: req.body.phone,
        mail: req.body.mail
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

exports.delete_setting = (req, res) => {
    Setting.findByIdAndDelete(req.params.setting_id).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}