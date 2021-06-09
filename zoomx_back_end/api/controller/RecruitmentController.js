const ImageUtil = require("../utils/ImageUtil");

const mongoose = require("mongoose"),
  Recruitment = mongoose.model("recruitment"),
  Upload = require("../model/UploadImageModel");

exports.get_recruitment = async (req, res) => {
  let perPage = 6; // số lượng sản phẩm xuất hiện trên 1 page
  let page = req.query.page;
  let totalPage;
  await Recruitment.find().then((result) => {
    result = totalPage;
  });
  Recruitment.find() // find tất cả các data
    .populate({
      path: "imageRecruitment",
      model: "image",
      select: "url",
    })
    .skip(perPage * page - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
    .limit(perPage)
    .exec((err, data) => {
      Recruitment.countDocuments((err, count) => {
        // đếm để tính có bao nhiêu trang
        if (err) return next(err);
        res.send({
          data: data,
          totalPage: totalPage.length,
        }); // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
      });
    });
};

exports.add_recruitment = (req, res) => {
  let imageRecruitment = req.files.filter(
    (item) => item.fieldname == "imageRecruitment"
  );
  let uploadRecruitment = new Promise((resolve, reject) => {
    Upload.uploadSingleFile({
      file: imageRecruitment[0],
      path: "ZoomX/Recruitment",
    })
      .then((resultRecruitment) => {
        resolve(resultRecruitment);
      })
      .catch((err) => {
        reject(null);
      });
  });
  uploadRecruitment
    .then((result) => {
      Recruitment.create({
        title: req.body.title,
        address: req.body.address,
        rank: req.body.rank,
        typeRank: req.body.typeRank,
        experience: req.body.experience,
        salary: req.body.salary,
        career: req.body.career,
        dateReceived: req.body.dateReceived,
        imageRecruitment: result._id,
        welfare: req.body.welfare,
        description: req.body.description,
        requestCareer: req.body.requestCareer,
      })
        .then((recruitment) => {
          res.send(recruitment);
        })
        .catch((error) => {
          res.send(error);
        });
    })
    .catch((error) => {
      res.send(error);
      console.log(error);
    });
};

exports.update_recruitment = (req, res) => {
  let id = req.params.recruitment_id;
  let imageRecruitment = req.files.filter(
    (item) => item.fieldname == "imageRecruitment"
  )[0];
  Recruitment.findById(id)
    .exec()
    .then((recruitment) => {
      ImageUtil.updateSingeFile(
        imageRecruitment,
        recruitment.imageRecruitment,
        "Recruitment"
      ).then((result) => {
        Recruitment.findByIdAndUpdate(id, {
          title: req.body.title,
          address: req.body.address,
          rank: req.body.rank,
          typeRank: req.body.typeRank,
          experience: req.body.experience,
          salary: req.body.salary,
          career: req.body.career,
          dateReceived: req.body.dateReceived,
          welfare: req.body.welfare,
          description: req.body.description,
          requestCareer: req.body.requestCareer,
        })
          .then((rec) => {
            res.send(rec);
          })
          .catch((error) => {
            res.send(error);
          });
      });
    });
};
exports.delete_recruitment = (req, res) => {
  let id = req.params.recruitment_id;
  Recruitment.findById(id)
    .exec()
    .then(async (recruitment) => {
      await ImageUtil.deleteSingleFile(recruitment.imageRecruitment).then(
        () => {
          recruitment.remove();
        }
      );
      res.send(recruitment);
    })
    .catch((error) => {
      res.send(error);
    });
};
exports.get_a_recruitment = (req, res) => {
  Recruitment.findById(req.params.recruitment_id)
    .populate({
      path: "imageRecruitment",
      model: "image",
      select: "url",
    })
    .then((recruitment) => {
      res.send(recruitment);
    })
    .catch((error) => {
      res.send(error);
    });
};
