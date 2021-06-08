const FileUtil = require("../utils/FileUtil");
const ImageUtil = require("../utils/ImageUtil");

const mongoose = require("mongoose"),
  LibraryLookup = mongoose.model("librarylookup"),
  Upload = require("../model/UploadImageModel"),
  UploadFile = require("../model/UploadFileModel");

exports.get_library_lookup = async (req, res) => {
  let perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
  let page = req.query.page;
  let totalPage;
  await LibraryLookup.find()
    .then((result) => {
      totalPage = result;
    })
    .catch((error) => {
      console.log(error);
    });
  LibraryLookup.find() // find tất cả các data
    .populate([
      {
        path: "fileBook",
        model: "file",
      },
      {
        path: "imageCover",
        model: "image",
      },
    ])
    .skip(perPage * page - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
    .limit(perPage)
    .exec((err, data) => {
      LibraryLookup.countDocuments((err, count) => {
        // đếm để tính có bao nhiêu trang
        if (err) return next(err);
        // res.send({
        //     data,
        //     totalPage: totalPage.length
        // }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
        // res.status(200).json(data)
        res.send({
          data: data,
          totalPage: totalPage.length,
        });
      });
    });
};

exports.add_library_lookup = (req, res) => {
  let fileCover = req.files.filter((item) => item.fieldname == "imageCover");
  let filePDF = req.files.filter((item) => item.fieldname == "fileBook");
  let uploadCover = new Promise((resolve, reject) => {
    Upload.uploadSingleFile({
      file: fileCover[0],
      path: "ZoomX/Library/LookUp",
    })
      .then((resultCover) => {
        resolve({
          imageCover: resultCover._id,
        });
      })
      .catch((err) => {
        reject({
          imageCover: null,
        });
      });
  });
  let uploadPDF = new Promise((resolve, reject) => {
    UploadFile.uploadSingleFile({
      file: filePDF[0],
      path: "ZoomX/Library/LookUp",
    })
      .then((resultFileBook) => {
        resolve({
          fileBook: resultFileBook._id,
        });
      })
      .catch((err) => {
        reject({
          fileBook: null,
        });
      });
  });
  Promise.all([uploadPDF, uploadCover])
    .then((result) => {
      LibraryLookup.create({
        name: req.body.name,
        imageCover: result.filter((item) => item.imageCover)[0].imageCover
          ? result.filter((item) => item.imageCover)[0].imageCover
          : null,
        fileBook: result.filter((item) => item.fileBook)[0].fileBook
          ? result.filter((item) => item.fileBook)[0].fileBook
          : null,
      })
        .then((libLookup) => {
          res.send(libLookup);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      res.send(error);
    });
};
exports.update_library_lookup = async (req, res) => {
  let fileCover = req.files.filter((item) => item.fieldname == "imageCover")[0];
  let filePDF = req.files.filter((item) => item.fieldname == "fileBook")[0];
  let libraryLookup = await LibraryLookup.findById(
    req.params.library_lookup_id
  );
  let updateCover = new Promise((resolve, reject) => {
    ImageUtil.updateSingeFile(
      fileCover,
      libraryLookup.imageCover,
      "Library/LookUp"
    )
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
  let updateFile = new Promise((resolve, reject) => {
    FileUtil.updateSingeFile(filePDF, libraryLookup.fileBook, "Library/LookUp")
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });

  Promise.all([updateCover, updateFile])
    .then((result) => {
      LibraryLookup.findByIdAndUpdate(req.params.library_lookup_id, {
        name: req.body.name,
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
exports.delete_library_lookup = async (req, res) => {
  let libraryLookup = await LibraryLookup.findById(
    req.params.library_lookup_id
  );
  let deleteImageCover = new Promise((resolve, reject) => {
    ImageUtil.deleteSingleFile(libraryLookup.imageCover)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        res.send(error);
      });
  });
  let deleteFileBook = new Promise((resolve, reject) => {
    FileUtil.deleteSingleFile(libraryLookup.fileBook)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        res.send(error);
      });
  });
  Promise.all([deleteFileBook, deleteImageCover])
    .then(() => {
      libraryLookup.remove();
      res.send("Xoa thanh cong");
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.get_a_library_lookup = (req, res) => {
  LibraryLookup.findById(req.params.library_lookup_id)
    .populate([
      {
        path: "fileBook",
        model: "file",
      },
      {
        path: "imageCover",
        model: "image",
      },
    ])
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
