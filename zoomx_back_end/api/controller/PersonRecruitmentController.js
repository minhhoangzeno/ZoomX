const FileUtil = require('../utils/FileUtil');

const mongoose = require('mongoose'),
    PersonRecruitment = mongoose.model('personRecruitment'),
    UploadFile = require('../model/UploadFileModel');

exports.get_person_recruitment = async (req, res) => {

    let perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
    let page = req.query.page;
    let totalPage;
    await PersonRecruitment.find().then(result => {
        totalPage = result
    }).catch(error => {
        console.log(error)
    })
    PersonRecruitment
        .find() // find tất cả các data
        .populate({
            path: 'fileCv',
            model: 'file',
            select: 'fileUrl'
        })
        .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(perPage)
        .exec((err, data) => {
            PersonRecruitment.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
                if (err) return next(err);
                // res.send({
                //     data,
                //     totalPage: totalPage.length
                // }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
                // res.status(200).json(data)
                res.send({
                    data: data,
                    totalPage: totalPage.length
                })
            });
        });
};

exports.add_person_recruitment = (req, res) => {
    let filePDF = req.files.filter((item) => item.fieldname == "fileCv");

    let uploadPDF = new Promise((resolve, reject) => {
        UploadFile.uploadSingleFile({
            file: filePDF[0],
            path: "ZoomX/Person/Recruitment",
        })
            .then((resultFileBook) => {
                resolve(resultFileBook._id);
            })
            .catch((err) => {
                reject(null);
            });
    });
    uploadPDF.then(result => {
        PersonRecruitment.create({
            career: req.body.career,
            addressWork: req.body.addressWork,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            numberPhone: req.body.numberPhone,
            fileCv: result
        }).then(data => {
            res.send(data)
        }).catch(err => {
            res.send(err)
        })
    }).catch(error => {
        console.log(error)
    })
}

exports.delete_person_recruitment = (req, res) => {
    let id = req.params.person_recruitment_id;
    PersonRecruitment.findById(id).exec().then(async ps => {
        await FileUtil.deleteSingleFile(ps.fileCv).then(() => {
            ps.remove()
        })
        res.send(ps)
    }).catch(error => {
        res.send(error)
    })
}