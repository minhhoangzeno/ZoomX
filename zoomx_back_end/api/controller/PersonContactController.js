const mongoose = require('mongoose'),
    PersonContact = mongoose.model('personContact');

exports.get_person_contact = (req, res) => {
    PersonContact.find({})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
}

exports.add_person_contact = (req, res) => {
    let newPersonContact = new PersonContact(req.body);
    let addPromise = new Promise((resolve, reject) => {
        newPersonContact.save()
            .then(ps => {
                resolve(ps)
            })
            .catch(err => {
                reject(err)
            })
    })
    addPromise.then(ps => {
        res.send(ps)
    }).catch(err => {
        res.send(err)
    })
}

exports.delete_person_contact = (req, res) => {
    let id = req.params.person_contact_id;
    PersonContact.findByIdAndDelete(id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
}