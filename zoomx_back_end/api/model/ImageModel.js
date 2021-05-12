/**
 * Tao model Image
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ImageModel = new Schema({
    imageName: {
        type: String
    },
    url: {
        type: String
    },
    imageId: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('image', ImageModel)