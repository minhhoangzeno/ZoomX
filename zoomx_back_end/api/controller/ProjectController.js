const mongoose = require("mongoose"),
  Project = mongoose.model("project"),
  ImageUtil = require("../utils/ImageUtil"),
  Upload = require("../model/UploadImageModel");

exports.get_project = async (req, res, next) => {
  let perPage = 6; // số lượng sản phẩm xuất hiện trên 1 page
  let page = req.query.page;
  let typeInvestment = req.query.typeInvestment;
  if (typeInvestment == 1) {
    let totalPage;
    await Project.find().then((result) => (totalPage = result));
    Project.find() // find tất cả các data
      .populate([
        {
          path: "imageCover",
          model: "image",
          select: "url",
        },
        {
          path: "imageInfor",
          model: "image",
          select: "url",
        },
      ])
      .skip(perPage * page - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
      .limit(perPage)
      .exec((err, data) => {
        Project.countDocuments((err, count) => {
          // đếm để tính có bao nhiêu trang
          if (err) return next(err);
          res.send({
            data,
            totalPage: totalPage.length,
          }); // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
        });
      });
  } else {
    let totalPage;
    await Project.find({ typeInvestment: typeInvestment }).then(
      (result) => (totalPage = result)
    );
    Project.find({ typeInvestment: typeInvestment }) // find tất cả các data
      .populate([
        {
          path: "imageCover",
          model: "image",
          select: "url",
        },
        {
          path: "imageInfor",
          model: "image",
          select: "url",
        },
      ])
      .skip(perPage * page - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
      .limit(perPage)
      .exec((err, data) => {
        Project.countDocuments((err, count) => {
          // đếm để tính có bao nhiêu trang
          if (err) return next(err);
          res.send({
            data,
            totalPage: totalPage.length,
          }); // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
        });
      });
  }
};

exports.add_project = (req, res) => {
  let fileInfor = req.files.filter((item) => item.fieldname == "imageInfor");
  let fileCover = req.files.filter((item) => item.fieldname == "imageCover");
  console.log(req.files);
  let uploadCover = new Promise((resolve, reject) => {
    Upload.uploadSingleFile({
      file: fileCover[0],
      path: "ZoomX/Project",
    })
      .then((resultCover) => {
        resolve({
          imageCover: resultCover._id,
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
  let uploadInfor = new Promise((resolve, reject) => {
    Upload.uploadSingleFile({
      file: fileInfor[0],
      path: "ZoomX/Project",
    })
      .then((resultFileBook) => {
        resolve({
          imageInfor: resultFileBook._id,
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
  Promise.all([uploadCover, uploadInfor]).then((result) => {
    Project.create({
      projectName: req.body.projectName,
      typeInvestment: req.body.typeInvestment,
      address: req.body.address,
      acreage: req.body.acreage,
      totalInvestment: req.body.totalInvestment,
      categoryInvestment: req.body.categoryInvestment,
      description: req.body.description,
      imageCover: result.filter((item) => item.imageCover)[0].imageCover,
      imageInfor: result.filter((item) => item.imageInfor)[0].imageInfor,
    })
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.send(error);
        console.log(error);
      });
  });
};

exports.update_project = async (req, res) => {
  let fileInfor = req.files.filter((item) => item.fieldname == "imageInfor")[0];
  let fileCover = req.files.filter((item) => item.fieldname == "imageCover")[0];
  let project = await Project.findById(req.params.project_id);
  let updateCover = new Promise((resolve, reject) => {
    ImageUtil.updateSingeFile(fileCover, project.imageCover, "Project")
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
  let updateInfor = new Promise((resolve, reject) => {
    ImageUtil.updateSingeFile(fileInfor, project.imageInfor, "Project")
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });

  Promise.all([updateCover, updateInfor])
    .then((result) => {
      Project.findByIdAndUpdate(req.params.project_id, {
        projectName: req.body.projectName,
        typeInvestment: req.body.typeInvestment,
        address: req.body.address,
        acreage: req.body.acreage,
        totalInvestment: req.body.totalInvestment,
        categoryInvestment: req.body.categoryInvestment,
        description: req.body.description,
      })
        .then((data) => {
          res.send(data);
        })
        .catch((error) => {
          res.send(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};
exports.delete_project = async (req, res) => {
  let project = await Project.findById(req.params.project_id);
  let deleteImageCover = new Promise((resolve, reject) => {
    ImageUtil.deleteSingleFile(project.imageCover)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        res.send(error);
      });
  });
  let deleteImageInfor = new Promise((resolve, reject) => {
    ImageUtil.deleteSingleFile(project.imageInfor)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        res.send(error);
      });
  });
  Promise.all([deleteImageInfor, deleteImageCover])
    .then(() => {
      project.remove();
      res.send("Xoa thanh cong");
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.get_a_project = (req, res) => {
  Project.findById(req.params.project_id) // find tất cả các data
    .populate([
      {
        path: "imageCover",
        model: "image",
        select: "url",
      },
      {
        path: "imageInfor",
        model: "image",
        select: "url",
      },
    ])
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
