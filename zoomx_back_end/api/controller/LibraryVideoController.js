const ImageUtil = require("../utils/ImageUtil");

const mongoose = require("mongoose"),
  LibraryVideo = mongoose.model("libraryvideo"),
  Upload = require("../model/UploadImageModel");

exports.get_libraryvideo = async (req, res) => {
  let perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
  let page = req.query.page;
  let totalPage;
  await LibraryVideo.find()
    .then((result) => {
      totalPage = result;
    })
    .catch((error) => {
      console.log(error);
    });
  LibraryVideo.find() // find tất cả các data
    .skip(perPage * page - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
    .limit(perPage)
    .exec((err, data) => {
      LibraryVideo.countDocuments((err, count) => {
        // đếm để tính có bao nhiêu trang
        if (err) return next(err);
        res.send({
          data: data,
          totalPage: totalPage.length,
        });
      });
    });
};
exports.add_libraryvideo = (req, res) => {
  LibraryVideo.create({
    name: req.body.name,
    videoUrl: req.body.videoUrl,
  })
    .then((libVideo) => {
      res.send(libVideo);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.update_library_video = (req, res) => {
  let id = req.params.library_video_id;
  LibraryVideo.findByIdAndUpdate(id, {
    name: req.body.name,
    videoUrl: req.body.videoUrl,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.delete_library_video = (req, res) => {
  LibraryVideo.findByIdAndDelete(req.params.library_video_id)
    .exec()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.get_a_libraryvideo = (req, res) => {
  LibraryVideo.findById(req.params.library_video_id)
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.send(err)
    })
}