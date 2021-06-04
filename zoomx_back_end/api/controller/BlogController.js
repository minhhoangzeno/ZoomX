const mongoose = require("mongoose"),
  Blog = mongoose.model("blog"),
  Upload = require("../model/UploadImageModel");
exports.get_all_blog = (req, res) => {
  Blog.find({})
    .populate([
      {
        path: "startImg",
        model: "image",
        select: "url",
      },
      {
        path: "midImg",
        model: "image",
        select: "url",
      },
      {
        path: "beginImg",
        model: "image",
        select: "url",
      },
    ])
    // .populate('startContent.$*.imageContent')
    .then((blog) => {
      res.send(blog);
    })
    .catch((error) => {
      res.send(error);
    });
};
exports.get_a_blog = (req, res) => {
  Blog.findById(req.params.blog_id)
    .populate([
      {
        path: "startImg",
        model: "image",
        select: "url",
      },
      {
        path: "midImg",
        model: "image",
        select: "url",
      },
      {
        path: "beginImg",
        model: "image",
        select: "url",
      },
    ])
    .then((blog) => {
      res.send(blog);
    })
    .catch((error) => {
      res.send(error);
    });
};
exports.add_blog = (req, res) => {
  let objBlog = new Blog(req.body);
  let addBlogPromise = new Promise((resolve, reject) => {
    objBlog
      .save()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
  addBlogPromise
    .then((blog) => {
      res.send(blog);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.upload_imgae_start = (req, res) => {
  Upload.uploadMultipleFile({
    file: req.files,
    path: "ZoomX/Blog",
  }).then((result) => {
    const image_id = [];
    result.map((rs) => {
      image_id.push(rs._id);
    });
    let update_blog = new Promise((resolve, reject) => {
      Blog.findByIdAndUpdate(req.params.blog_id, { startImg: image_id })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
    update_blog
      .then((blog) => {
        res.send(blog);
      })
      .catch((error) => {
        res.send(error);
      });
  });
};

exports.upload_imgae_mid = (req, res) => {
  Upload.uploadMultipleFile({
    file: req.files,
    path: "ZoomX/Blog",
  }).then((result) => {
    const image_id = [];
    result.map((rs) => {
      image_id.push(rs._id);
    });
    let update_blog = new Promise((resolve, reject) => {
      Blog.findByIdAndUpdate(req.params.blog_id, { midImg: image_id })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
    update_blog
      .then((blog) => {
        res.send(blog);
      })
      .catch((error) => {
        res.send(error);
      });
  });
};

exports.upload_imgae_begin = (req, res) => {
  Upload.uploadMultipleFile({
    file: req.files,
    path: "ZoomX/Blog",
  }).then((result) => {
    const image_id = [];
    result.map((rs) => {
      image_id.push(rs._id);
    });
    let update_blog = new Promise((resolve, reject) => {
      Blog.findByIdAndUpdate(req.params.blog_id, { beginImg: image_id })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
    update_blog
      .then((blog) => {
        res.send(blog);
      })
      .catch((error) => {
        res.send(error);
      });
  });
};

exports.update_blog = (req, res) => {
  Blog.findByIdAndUpdate(req.params.blog_id, req.body)
    .then((blog) => {
      res.send(blog);
    })
    .catch((error) => {
      res.send(error);
    });
};
exports.delete_blog = (req, res) => {
  Blog.findByIdAndDelete(req.params.blog_id)
    .then((blog) => {
      res.send(blog);
    })
    .catch((error) => {
      res.send(error);
    });
};
