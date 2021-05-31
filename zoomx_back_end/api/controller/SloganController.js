const mongoose = require('mongoose'),
    Slogan = mongoose.model('slogan');

exports.get_slogan = (req,res) => {
    Slogan.find().exec().then(slogan => {
        res.send(slogan)
    }).catch(error => {
        res.send(error)
    })
}

exports.add_slogan = (req,res) => {
    Slogan.create(req.body).then(slogan => {
        res.send(slogan)
    }).catch(error => {
        res.send(error)
    })
}

exports.update_slogan = (req,res) => {
    Slogan.findByIdAndUpdate(req.params.slogan_id,req.body).exec().then(slogan => {
        res.send(slogan)
    }).catch(error => {
        res.send(error)
    })
}

exports.delete_slogan = (req,res) => {
    Slogan.findByIdAndDelete(req.params.slogan_id).then(slogan => {
        res.send(slogan)
    }).catch(error => {
        res.send(error)
    })
}