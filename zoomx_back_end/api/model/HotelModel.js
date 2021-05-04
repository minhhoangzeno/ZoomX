const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: String,
    description: String
})

const Hotel = mongoose.model('Hotel',hotelSchema);
module.exports = Hotel;