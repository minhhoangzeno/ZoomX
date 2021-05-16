/**
 * Tao ra model PersonContact de luu tru user da nhap form lien ha
 * firstName String
 * lastName String
 * email String
 * numberPhone Number
 * description String
 */
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const personContactSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  numberPhone: {
    type: Number,
    require: true,
  },
  description: String,
});

module.exports = mongoose.model("personContact", personContactSchema);
