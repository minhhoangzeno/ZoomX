const mongoose = require("mongoose"),
  Image = mongoose.model("image"),
  cloudinary = require("cloudinary").v2,
  Upload = require("../model/UploadImageModel"),
  Cloudinary = require("../model/ModelCloudinary");
var utils = (module.exports = {
  updateSingeFile: (file, imageId, folder) => {
    return new Promise((resolve, reject) => {
      Image.findById(imageId)
        .exec()
        .then(async (image) => {
          await cloudinary.uploader.destroy(image.cloudinaryId);
          Cloudinary.uploadSingle({
            file: file.path,
            path: `ZoomX/${folder}`,
          }).then((result) => {
            Image.findByIdAndUpdate(imageId, {
              url: result.url,
              cloudinaryId: result.id,
            }).exec();
            resolve(result);
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateMutipleFile: (requests, folder) => {
    return new Promise((resolve, reject) => {
      requests.map((req) => {
        Image.findById(req.imageId)
          .exec()
          .then(async (image) => {
            await cloudinary.uploader.destroy(image.cloudinaryId);
            Cloudinary.uploadSingle({
              file: req.path,
              path: `ZoomX/${folder}`,
            }).then((result) => {
              Image.findByIdAndUpdate(imageId, {
                url: result.url,
                cloudinaryId: result.id,
              }).exec();
              resolve(result);
            });
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    });
  },
  deleteSingleFile: (imageId) => {
    return new Promise((resolve, reject) => {
      Image.findById(imageId)
        .exec()
        .then(async (image) => {
          await cloudinary.uploader.destroy(image.cloudinaryId);
          image.remove();
          resolve(image);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
});
