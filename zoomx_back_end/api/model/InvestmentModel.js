/**
 * Tạo model Investment (Lĩnh vực đầu tư) với các thuộc tính
 * investmentName String
 * description String
 * isDeleted Boolen
 * imageCover ref
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const investmentSchema = new Schema({
    investmentName:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    imageCover:{
        type: Schema.Types.ObjectId,
        ref: 'image'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const Investment = mongoose.model('investment',investmentSchema)
module.exports = Investment;