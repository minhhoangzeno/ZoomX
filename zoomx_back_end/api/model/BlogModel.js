/**
 * tao ra model Blog voi cac thuoc tinh sau
 * blogArr
 * blogLabel
 * blogImage
 * blogDescription
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    categoryId: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    contentStart: {
        type: String
    },
    contentMain: {
        type: String
    },
    imageBlog: [{
        type: Schema.Types.ObjectId,
        ref: 'image'
    }],
    contentBegin: {
        type: String
    }
}, {
    bufferCommands: true,
    autoCreate: true
})
module.exports = mongoose.model('blog', blogSchema);
