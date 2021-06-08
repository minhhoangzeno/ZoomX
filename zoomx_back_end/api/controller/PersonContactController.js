const mongoose = require('mongoose'),
    PersonContact = mongoose.model('personContact');

exports.get_person_contact = async (req, res) => {
    let perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
    let page = req.query.page;
    let totalPage;
    await PersonContact.find().then(result => totalPage = result)
    PersonContact
        .find() // find tất cả các data
        
        .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(perPage)
        .exec((err, data) => {
            PersonContact.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
                if (err) return next(err);
                res.send({
                    data,
                    totalPage: totalPage?.length
                }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
            });
        });
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