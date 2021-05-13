/**
 * Tạo ra model TimeLine (Lo trinh trien khai) voi cac thuoc tinh sau
 * label String
 * content String
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const timelineSchema = new Schema({
    label: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('timeline', timelineSchema);