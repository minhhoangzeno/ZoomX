const mongoose = require("mongoose"),
  User = mongoose.model("user"),
  bcrypt = require("bcrypt"),
  Upload = require("../model/UploadImageModel"),
  ImageUtil = require("../utils/ImageUtil");
exports.get_user = (req, res) => {
  User.find()
    .populate({
      path: "avatar",
      model: "image",
      select: "url",
    })
    .then(async data => {
      let result = data.filter(function (item) {
        return (item._id != "60cc1295d608e12e4c10be07")
      })
      console.log(result)
      res.send(result)
    })

};

exports.add_user = (req, res) => {
  let uploadAvatar = new Promise((resolve, reject) => {
    Upload.uploadSingleFile({
      file: req.files[0],
      path: "ZoomX/Admin",
    })
      .then((avatar) => {
        resolve(avatar);
      })
      .catch((error) => {
        reject(null);
      });
  });
  let savePassword;
  bcrypt.hash(req.body.password, 10, (error, hash) => {
    savePassword = hash;
  })

  uploadAvatar.then((result) => {
    User.create({
      username: req.body.username,
      password: savePassword,
      displayName: req.body.displayName,
      avatar: result._id,
      isAdmin: req.body.isAdmin,
    })
      .then((data) => {
        User.findById(data._id)
          .populate({
            path: "avatar",
            model: "image",
            select: "url",
          })
          .then((user) => {
            res.send(user);
          });
      })
      .catch((err) => {
        res.send(err);
      });
  });
};

exports.login_user = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username }, (error, user) => {
    if (user) {
      console.log(user);
      console.log(password);
      console.log(user.password)
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          User.findById(user._id)
            .populate({
              path: "avatar",
              model: "image",
              select: "url",
            })
            .then((data) => {
              res.send(data);
            });
        } else {
          res.send(null);
        }
      });
    } else {
      res.send(null);
    }
  });
};
exports.delete_user = (req, res) => {
  let id = req.params.user_id;
  User.findById(id)
    .exec()
    .then(async (user) => {
      await ImageUtil.deleteSingleFile(user.avatar).then(() => {
        user.remove();
      });
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.update_user = (req, res) => {
  let id = req.params.user_id;
  let password = req.body.password;
  let savePassword;
  bcrypt.hash(password, 10, (error, hash) => {
    savePassword = hash;
  });
  User.findById(id)
    .exec()
    .then((user) => {
      ImageUtil.updateSingeFile(req.files[0], user.avatar, "User").then(() => {
        User.findByIdAndUpdate(id, {
          password: savePassword,
          displayName: req.body.displayName,
        })
          .then((data) => {
            User.findById(data._id)
              .populate({
                path: "avatar",
                model: "image",
                select: "url",
              })
              .then((user) => {
                res.send(user);
              });
          })
          .catch((error) => {
            res.send(error);
          });
      });
    });
};
exports.set_role_admin_user = (req, res) => {
  let id = req.params.user_id;
  User.findByIdAndUpdate(id, { isAdmin: "Admin" })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.set_role_user_user = (req, res) => {
  let id = req.params.user_id;
  User.findByIdAndUpdate(id, { isAdmin: "User" })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.set_role_member_user = (req, res) => {
  let id = req.params.user_id;
  User.findByIdAndUpdate(id, { isAdmin: "Member" })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
