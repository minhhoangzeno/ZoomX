/**
 * tao ra modal Library Look up voi cac thuoc tinh sau
 * name String 
 * imageCover ref 
 * fileBook ref file
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const libraryLookupSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    imageCover: {
        type: Schema.Types.ObjectId,
        ref: 'image'
    },
    fileBook: {
        type: Schema.Types.ObjectId,
        ref: 'file'
    }
}, {
    bufferCommands: true,
    autoCreate: true
})

module.exports = mongoose.model('librarylookup', libraryLookupSchema)