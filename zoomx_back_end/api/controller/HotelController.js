const Hotel = require('../model/HotelModel');

exports.get_all = (req,res) => {
    Hotel.find({},(err,result) => {
        if(err) res.send(err)
        res.send(result)
    } )
}

exports.add_all = (req,res) => {
    Hotel.create({
        name: req.body.name,
        description: req.body.description
    },(err,result) => {
        if(err) res.send(err)
        res.send(result)
    })
}