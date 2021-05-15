const mongoose = require('mongoose'),
    TimeLine = mongoose.model('timeline');

exports.get_timeline = (req, res) => {
    const timelinePromise = new Promise((resolve, reject) => {
        TimeLine.find({})
            .then(timeline => {
                resolve(timeline)
            })
            .catch(error => {
                reject(error)
            })
    })
    timelinePromise.then(timeline => {
        res.send(timeline)
    }).catch(err => {
        res.send(err)
    })
}

exports.add_timeline = (req, res) => {
    const newTimeLine = new TimeLine(req.body);
    const addPromise = new Promise((resolve, reject) => {
        newTimeLine.save()
            .then(timeline => {
                resolve(timeline)
            })
            .catch(err => {
                reject(err)
            })
    })
    addPromise.then(timeline => {
        res.send(timeline)
    }).catch(err => {
        res.send({ err })
    })
}
exports.update_timeline = (req, res) => {
    TimeLine.findByIdAndUpdate(req.params.timeline_id, {
        label: req.body.label,
        content: req.body.content
    }, { useFindAndModify: true }).then(timeline => {
        res.send(timeline)
    }).catch(err => {
        res.send(err)
    })
}

exports.delete_timeline = (req, res) => {
    TimeLine.findByIdAndDelete(req.params.timeline_id).then(timeline => {
        res.send(timeline)
    }).catch(err => {
        res.send(err)
    })
}