var cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dbp8yfsyx",
  api_key: "757189822534373",
  api_secret: "Pd3eMOBX99OpjR-ARrKjKzd1FDw",
});

var self = (module.exports = {
  uploadSingle: (request) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload(request.file, {
          folder: request.path,
        })
        .then((result) => {
          const filename = String(request.file).split("\\");
          const fs = require("fs");
          fs.unlinkSync(request.file);
          resolve({
            name: filename[filename.length - 1],
            url: result.secure_url,
            id: result.public_id,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  uploadMultiple: (request) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload(request.file, {
          folder: request.path,
        })
        .then((result) => {
          const filename = String(request.file).split("\\");
          console.log(filename[filename.length - 1]);
          const fs = require("fs");
          fs.unlinkSync(request.file);
          console.log(result.secure_url);
          resolve({
            name: filename[filename.length - 1],
            url: result.secure_url,
            id: result.public_id,
          }).catch((error) => {
            reject(error);
          });
        });
    });
  },
  reSizeImage: (id, h, w) => {
    return cloudinary.url(id, {
      height: h,
      width: w,
      crop: "scale",
      format: "jpg",
    });
  },
});
