/**
 * tao ra model Library Image voi cac thuoc tinh sau
 * name String
 * imageCover ref {}
 * imageList ref [{}]
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const libraryImageSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    imageCover: {
        type: Schema.Types.ObjectId,
        ref: 'image'
    },
    imageList: [{
        type: Schema.Types.ObjectId,
        ref: 'image'
    }],
    isDeleted: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('libraryImage', libraryImageSchema);