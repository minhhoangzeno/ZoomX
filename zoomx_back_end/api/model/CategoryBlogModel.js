/**
 * tao ra model CategoryBlog (danh muc blog) voi cac thuoc tinh sau
 * name
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const categoryBlogSchema = new Schema({
    name: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('categoryBlog', categoryBlogSchema);