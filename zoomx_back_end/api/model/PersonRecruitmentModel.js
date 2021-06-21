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
        type: String
    },
    addressWork: {
        type: String,
        require: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    numberPhone: {
        type: String
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