/**
 * Tao model Tuyen dung voi cac thuoc tinh sau
 * title String
 * address String
 * rank String
 * typeRank String
 * experience String
 * salary String
 * career String
 * dateReceived Date
 * imageRecruitment {ref}
 * welfare String phuc loi
 * description String mo ta cong viec
 * requestCareer String yeu cau cong viec
 */
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const recruitmentSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  rank: {
    type: String,
    require: true,
  },
  typeRank: {
    type: String,
    require: true,
  },
  experience: {
    type: String,
    require: true,
  },
  salary: {
    type: String,
    require: true,
  },
  career: {
    type: String,
    require: true,
  },
  dateReceived: {
    type: Date,
    default: Date.now,
  },
  imageRecruitment: {
    type: Schema.Types.ObjectId,
    ref: "image",
  },
  welfare: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  requestCareer: {
    type: String,
    require: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("recruitment", recruitmentSchema);
