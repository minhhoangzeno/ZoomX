/**
 * Tao model Image
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ImageModel = new Schema({
    url: {
        type: String
    },
    cloudinaryId: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('image', ImageModel)