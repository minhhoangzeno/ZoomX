const AddImageProject = require("../utils/project/AddImageProject");

var mongoose = require("mongoose"),
  Investment = mongoose.model("investment"),
  Upload = require("../model/UploadImageModel"),
  Project = mongoose.model("project"),
  ImageUtil = require("../utils/ImageUtil");
//get tat ca linh vuc dau tu
exports.get_all_investment = (req, res) => {
  Investment.find()
    .populate({
      path: "imageCover",
      model: "image",
      select: "url",
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};
exports.get_investment = (req, res) => {
  Investment.find({
    isDeleted: false
  })
    .populate({
      path: "imageCover",
      model: "image",
      select: "url",
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
}

exports.get_a_investment = (req, res) => {
  Investment.findById(req.params.investment_id)
    .populate({
      path: "imageCover",
      model: "image",
      select: "url",
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.add_investment = (req, res) => {
  let fileCover = req.files.filter((item) => item.fieldname == "imageCover");
  let uploadCover = new Promise((resolve, reject) => {
    Upload.uploadSingleFile({
      file: fileCover[0],
      path: "ZoomX/Investment",
    })
      .then((resultCover) => {
        resolve(resultCover._id);
      })
      .catch((err) => {
        reject({
          imageCover: null,
        });
      });
  });
  uploadCover
    .then((result) => {
      Investment.create({
        investmentName: req.body.investmentName,
        description: req.body.description,
        imageCover: result,
      })
        .then((investment) => {
          res.send(investment);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      res.send(error);
    });
};
exports.update_investment = async (req, res) => {
  let fileCover = req.files.filter((item) => item.fieldname == "imageCover")[0];
  let investment = await Investment.findById(req.params.investment_id);
  let updateCover = new Promise((resolve, reject) => {
    ImageUtil.updateSingeFile(fileCover, investment.imageCover, "Investment")
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
  updateCover
    .then(() => {
      Investment.findByIdAndUpdate(req.params.investment_id, {
        investmentName: req.body.investmentName,
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
      res.send(error);
    });
};

exports.delete_investment = (req, res) => {
  let id = req.params.investment_id;
  Investment.findByIdAndUpdate(id, { isDeleted: true })
    .exec()
    .then((investment) => {
      console.log(investment);
      Project.find({
        typeInvestment: investment._id,
      })
        .then((result) => {
          result.map((pj) => {
            Project.findByIdAndUpdate(pj._id, {
              typeInvestment: null,
            })
              .then((project) => {
                res.send(project);
              })
              .catch((error) => {
                res.send(error);
              });
          });
        })
        .catch((err) => {
          res.send(err);
        });
      res.send(investment);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.remove_investment = (req, res) => {
  let id = req.params.investment_id;
  Investment.findById(id)
    .then(async (investment) => {
      Project.find({
        typeInvestment: investment._id,
      })
        .then((result) => {
          result.map((pj) => {
            AddImageProject.deleteImageProject(pj._id).then(() => {
              pj.remove();
            });
          });
        })
        .catch((err) => {
          res.send(err);
        });
      await ImageUtil.deleteSingleFile(investment.imageCover);
      investment.remove();
      res.send(investment);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.set_investment = (req, res) => {
  let id = req.params.investment_id;
  Investment.findByIdAndUpdate(id, { isDeleted: false })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};
