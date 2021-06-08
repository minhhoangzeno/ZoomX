const mongoose = require('mongoose'),
    PersonMail = mongoose.model('personMail');

exports.get_mails = async (req, res) => {
    let perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
    let page = req.query.page;
    let totalPage;
    await PersonMail.find().then((result) => (totalPage = result));
    PersonMail.find() // find tất cả các data
  
      .skip(perPage * page - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
      .limit(perPage)
      .exec((err, data) => {
        PersonMail.countDocuments((err, count) => {
          // đếm để tính có bao nhiêu trang
          if (err) return next(err);
          res.send({
            data,
            totalPage: totalPage.length,
          }); // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
        });
      });
}
exports.add_mail = (req, res) => {
    PersonMail.create({
        mail: req.body.mail
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}
exports.delete_mail = (req, res) => {
    PersonMail.findByIdAndDelete(req.params.mail_id).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}