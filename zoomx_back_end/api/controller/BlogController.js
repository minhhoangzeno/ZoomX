const ImageUtil = require("../utils/ImageUtil");

const mongoose = require("mongoose"),
  Blog = mongoose.model("blog"),
  Upload = require("../model/UploadImageModel");

exports.search_blog = async (req, res) => {
  let perPage = 8; // số lượng sản phẩm xuất hiện trên 1 page
  let page = req.query.page;
  let categoryId = req.query.categoryId;
  let regex = new RegExp(req.query.q, "i");
  if (categoryId == 1) {
    let totalPage;
    await Blog.find({ title: regex })
      .then((result) => {
        totalPage = result;
      })
      .catch((error) => {
        console.log(error);
      });
    Blog.find({ title: regex }) // find tất cả các data
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
        Blog.countDocuments((err, count) => {
          // đếm để tính có bao nhiêu trang
          if (err) return next(err);
          // res.send({
          //     data,
          //     totalPage: totalPage?.length
          // }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
          // res.status(200).json(data)
          res.send({
            data: data,
            totalPage: totalPage?.length,
          });
        });
      });
  } else {
    let totalPage;
    await Blog.find({ title: regex, categoryId: categoryId })
      .then((result) => {
        totalPage = result;
      })
      .catch((error) => {
        console.log(error);
      });
    Blog.find({ title: regex, categoryId: categoryId }) // find tất cả các data
      .skip(perPage * page - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
      .limit(perPage)
      .exec((err, data) => {
        Blog.countDocuments((err, count) => {
          // đếm để tính có bao nhiêu trang
          if (err) return next(err);
          // res.send({
          //     data,
          //     totalPage: totalPage?.length
          // }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
          // res.status(200).json(data)
          res.send({
            data: data,
            totalPage: totalPage?.length,
          });
        });
      });
  }

};

exports.add_a_blog = (req, res) => {
  let fileInfor = req.files.filter((item) => item.fieldname == "imageInfor");
  let fileCover = req.files.filter((item) => item.fieldname == "imageCover");
  console.log(req.files);
  let uploadCover = new Promise((resolve, reject) => {
    Upload.uploadSingleFile({
      file: fileCover[0],
      path: "ZoomX/Blog",
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
      path: "ZoomX/Blog",
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
    Blog.create({
      title: req.body.title,
      categoryId: req.body.categoryId,
      content: req.body.content,
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
exports.get_blog = async (req, res) => {
  let perPage = 8; // số lượng sản phẩm xuất hiện trên 1 page
  let page = req.query.page;
  let categoryId = req.query.categoryId;
  if (categoryId == 1) {
    let totalPage;
    await Blog.find()
      .then((result) => {
        totalPage = result;
      })
      .catch((error) => {
        console.log(error);
      });
    Blog.find() // find tất cả các data
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
        Blog.countDocuments((err, count) => {
          // đếm để tính có bao nhiêu trang
          if (err) return next(err);
          // res.send({
          //     data,
          //     totalPage: totalPage?.length
          // }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
          // res.status(200).json(data)
          res.send({
            data: data,
            totalPage: totalPage?.length,
          });
        });
      });
  } else {
    let totalPage;
    await Blog.find({ categoryId: categoryId })
      .then((result) => {
        totalPage = result;
      })
      .catch((error) => {
        console.log(error);
      });
    Blog.find({ categoryId: categoryId }) // find tất cả các data
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
        Blog.countDocuments((err, count) => {
          // đếm để tính có bao nhiêu trang
          if (err) return next(err);
          // res.send({
          //     data,
          //     totalPage: totalPage?.length
          // }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
          // res.status(200).json(data)
          res.send({
            data: data,
            totalPage: totalPage?.length,
          });
        });
      });
  }
};
exports.update_blog = async (req, res) => {
  let fileInfor = req.files.filter((item) => item.fieldname == "imageInfor")[0];
  let fileCover = req.files.filter((item) => item.fieldname == "imageCover")[0];
  let blog = await Blog.findById(req.params.blog_id);
  let updateCover = new Promise((resolve, reject) => {
    ImageUtil.updateSingeFile(fileCover, blog.imageCover, "Blog")
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
  let updateInfor = new Promise((resolve, reject) => {
    ImageUtil.updateSingeFile(fileInfor, blog.imageInfor, "Blog")
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
  Promise.all([updateCover, updateInfor])
    .then((result) => {
      Blog.findByIdAndUpdate(req.params.blog_id, {
        title: req.body.title,
        categoryId: req.body.categoryId,
        content: req.body.content,
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
exports.delete_blog = async (req, res) => {

  let blog = await Blog.findById(req.params.blog_id);
  let deleteImageCover = new Promise((resolve, reject) => {
    ImageUtil.deleteSingleFile(blog.imageCover)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        res.send(error);
      });
  });
  let deleteImageInfor = new Promise((resolve, reject) => {
    ImageUtil.deleteSingleFile(blog.imageInfor)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        res.send(error);
      });
  });
  Promise.all([deleteImageInfor, deleteImageCover])
    .then(() => {
      blog.remove();
      res.send("Xoa thanh cong");
    })
    .catch((error) => {
      res.send(error);
    });
};
exports.get_a_blog = (req, res) => {
  Blog.findById(req.params.blog_id)
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
