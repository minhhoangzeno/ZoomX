/**
 * Tao ra model Partner doi tac voi cac thuoc tinh
 * name String
 * logo ref
 */

const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const partnerSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  logo: {
    type: Schema.Types.ObjectId,
    ref: "image",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("partner", partnerSchema);
