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
    titleBlog: {
        type: String,
        require: true
    },
    typeBlog:{
        type: String,
        require: true
    },
    startTitle: String,
    startImage: [{
        type: Schema.Types.ObjectId,
        ref: 'image'
    }],
    startDescription: String,
    midTitle: String,
    midImage: [{
        type: Schema.Types.ObjectId,
        ref: 'image'
    }],
    midDescription: String,
    beginTitle: String,
    beginImage: [{
        type: Schema.Types.ObjectId,
        ref: 'image'
    }],
    beginDescription: String,



})
module.exports = mongoose.model('blog', blogSchema);
