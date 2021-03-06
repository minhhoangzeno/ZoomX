const LibraryLookupModel = require("../model/LibraryLookupModel");
const UpdateImageLibrary = require("../utils/library/UpdateImageLibrary");

const mongoose = require("mongoose"),
  LibraryImage = mongoose.model("libraryImage"),
  Upload = require("../model/UploadImageModel"),
  AddImageLibrary = require("../utils/library/AddImageLibrary");
exports.get_library_image = async (req, res) => {
  let perPage = 9; // số lượng sản phẩm xuất hiện trên 1 page
  let page = req.query.page;
  let totalPage;
  await LibraryImage.find()
    .then((result) => {
      totalPage = result;
    })
    .catch((error) => {
      console.log(error);
    });
  LibraryImage.find() // find tất cả các data
    .populate([
      {
        path: "imageCover",
        model: "image",
        select: "url",
      },
      {
        path: "imageList",
        populate: {
          path: "imageList",
          model: "image",
          select: "url",
        },
        select: "url",
      },
    ])
    .skip(perPage * page - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
    .limit(perPage)
    .exec((err, data) => {
      LibraryImage.countDocuments((err, count) => {
        // đếm để tính có bao nhiêu trang
        if (err) return next(err);
        res.send({
          data: data,
          totalPage: totalPage.length,
        });
      });
    });
};

exports.add_librare_image = (req, res) => {
  AddImageLibrary.addImageLibrary(req)
    .then((result) => {
      let objLibrary = {
        name: req.body.name,
        imageCover: result.filter((item) => item.imageCover)[0].imageCover
          ? result.filter((item) => item.imageCover)[0].imageCover
          : null,
        imageList: result.filter((item) => item.imageList)[0].imageList
          ? result.filter((item) => item.imageList)[0].imageList
          : null,
      };
      let newLibImage = new LibraryImage(objLibrary);
      newLibImage
        .save()
        .then((libImage) => {
          res.send(libImage);
        })
        .catch((error) => {
          res.send(error);
        });
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
};
exports.update_library_image = (req, res) => {
  UpdateImageLibrary.updateImageLibrary(req.params.library_image_id, req)
    .then((result) => {
      LibraryImage.findByIdAndUpdate(req.params.library_image_id, {
        name: req.body.name,
        imageCover: result.filter((item) => item.imageCover)[0].imageCover,
        imageList: result.filter((item) => item.imageList)[0].imageList,
      })
        .exec()
        .then((libImage) => {
          res.send(libImage);
        });
    })
    .catch((error) => {
      res.send(error);
    });
};
exports.delete_library_image = (req, res) => {
  AddImageLibrary.deleteImageLibrary(req.params.library_image_id)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.get_a_library_image = (req, res) => {
  LibraryImage.findById(req.params.library_image_id)
    .populate([
      {
        path: "imageCover",
        model: "image",
        select: "url",
      },
      {
        path: "imageList",
        populate: {
          path: "imageList",
          model: "image",
          select: "url",
        },
        select: "url",
      },
    ]).then(data => {
      res.send(data)
    }).catch(err => {
      res.send(err)
    })
}