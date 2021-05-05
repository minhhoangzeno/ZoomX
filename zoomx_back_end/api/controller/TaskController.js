const Task = require('../model/Task');

exports.get_list = (req,res) => {
    Task.find({},(err,result) => {
        if(err) res.send(err)
        res.send(result)
    })
}

exports.add_list = (req,res) => {
    Task.create({
        "name":req.body.name
    },(err,result) => {
        if(err) res.send(err)
        res.send(result)
    })
}