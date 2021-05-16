/**
 * Tao ra model File co cac thuoc tinh
 * fileName String
 * fileUrl
 * fileId
 */
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
const fileSchema = new Schema({
  fileName: {
    type: String,
    require: true,
  },
  fileUrl: {
    type: String,
    require: true,
  },
  fileId: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("file", fileSchema);
