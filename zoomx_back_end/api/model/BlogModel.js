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
    content: {
        type: String,
        require: true
    }
}, {
    bufferCommands: true,
    autoCreate: true
})
module.exports = mongoose.model('blog', blogSchema);
