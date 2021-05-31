const ImageUtil = require("../utils/ImageUtil");

const mongoose = require("mongoose"),
  YoungBusiness = mongoose.model("youngBusiness"),
  Upload = require("../model/UploadImageModel");

exports.get_young_business = (req, res) => {
  YoungBusiness.find({})
    .populate({
      path: "imageYoung",
      populate: {
        path: "imageYoung",
        model: "image",
        select: "url",
      },
      select: "url",
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.add_young_business = (req, res) => {
  let fileYoungs = req.files.filter((item) => item.fieldname == "imageYoung");
  let uploadProject = new Promise((resolve, reject) => {
    Upload.uploadMultipleFile({
      file: fileYoungs,
      path: "ZoomX/YoungBusiness",
    })
      .then((result) => {
        let idPj = [];
        result.map((item) => {
          idPj.push(item._id);
        });
        resolve({
          imageYoung: idPj,
        });
      })
      .catch((err) => {
        resolve({
          imageYoung: null,
        });
      });
  });
  uploadProject
    .then((result) => {
      console.log(result);
      YoungBusiness.create({
        title: req.body.title,
        content: req.body.content,
        imageYoung: result.imageYoung,
      }).then((data) => {
        res.send(data);
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.update_youngbusiness = async (req, res) => {
  let id = req.params.youngbusiness_id;
  let fileYoungs = req.files.filter((item) => item.fieldname == "imageYoung");
  await YoungBusiness.findById(id).then((youngbusiness) => {
    youngbusiness.imageYoung.map((item) => {
      ImageUtil.deleteSingleFile(item);
    });
  });
  let uploadProject = new Promise((resolve, reject) => {
    Upload.uploadMultipleFile({
      file: fileYoungs,
      path: "ZoomX/YoungBusiness",
    })
      .then((result) => {
        let idPj = [];
        result.map((item) => {
          idPj.push(item._id);
        });
        resolve({
          imageYoung: idPj,
        });
      })
      .catch((err) => {
        resolve({
          imageYoung: null,
        });
      });
  });
  uploadProject.then((result) => {
    YoungBusiness.findByIdAndUpdate(id, {
      title: req.body.title,
      content: req.body.content,
      imageYoung: result.imageYoung,
    })
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.send(error);
      });
  });
};

exports.delete_young_business = (req, res) => {
  let id = req.params.youngbusiness_id;
  YoungBusiness.findById(id).then((youngbusiness) => {
    youngbusiness.imageYoung.map((item) => {
      console.log(item);
      ImageUtil.deleteSingleFile(item)
        .then(() => {
          youngbusiness.remove();
          res.send(youngbusiness);
        })
        .catch((error) => {
          res.send(error);
          console.log(error);
        });
    });
  });
};
