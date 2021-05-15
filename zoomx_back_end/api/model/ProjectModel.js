/**
 * Tạo model Project (Dự án) với các thuộc tính
 * projectName String
 * address String
 * acreage String (diện tích)
 * totalInvestment String (tổng vốn đầu tư)
 * categoryInvestment String (hạng mục đầu tư)
 * dateStart Date (ngày khởi công)
 * dateFinish Date (ngày hoàn thành)
 * imageInfor ref (ảnh thông tin)
 * imageCover ref (ảnh cover)
 * description String (mô tả)
 * imageProject [{}] ref (ảnh dự án)
 * imageHero ref (ảnh heropage)
 */
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var ProjectSchema = new Schema({
    projectName: {
        type: String,
        require : true
    },
    typeInvestment: {
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    acreage:{
        type: String,
        require: true
    },
    totalInvestment:{
        type: String,
        require: true
    },
    categoryInvestment:{
        type: String,
        require: true
    },
    dateStart:{
        type: Date,
        default: Date.now,
    },
    dateFinish:{
        type: Date,
        default: Date.now,
    },
    imageInfor:{
        type: Schema.Types.ObjectId,
        ref: 'image'
    },
    imageCover:{
        type: Schema.Types.ObjectId,
        ref: 'image'
    },
    description:{
        type: String,
        require: true
    },
    imageProject: [{
        type: Schema.Types.ObjectId,
        ref:'image'
    }],
    imageHero:{
        type: Schema.Types.ObjectId,
        ref:'image'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('project',ProjectSchema)