/**
 * tao ra model Library Video voi cac thuoc tinh sau
 * name String
 * imageCover ref 
 * videoUrl String
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const libraryVideoSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    imageCover: {
        type: Schema.Types.ObjectId,
        ref: 'image'
    },
    videoUrl: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('libraryvideo', libraryVideoSchema);