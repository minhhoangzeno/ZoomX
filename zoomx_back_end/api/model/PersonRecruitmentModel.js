/**
 * Tao ra model Person tuyen dung voi cac thuoc tinh sau
 * career String chuc danh
 * addressWork String
 * personContact String
 * firstName String
 * lastName String
 * email String
 * numberPhone String
 * fileCv ref file
 */

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const personRecruitment = new Schema({
    career: {
        type: String,
        require: true
    },
    addressWork: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    numberPhone: {
        type: Number,
        require: true
    },
    fileCv: {
        type: Schema.Types.ObjectId,
        ref: 'file'
    }
}, {
    bufferCommands: true,
    autoCreate: true
})
module.exports = mongoose.model('personRecruitment', personRecruitment);