/**
 * tao ra model HeroHeader voi cac thuoc tinh sau
 * imageCover ref
 * label String
 * title String
 */

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const heroSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    label: {
        type: String,
        require: true
    },
    imageCover: {
        type: Schema.Types.ObjectId,
        ref: 'image'
    }
})
module.exports = mongoose.model('heroContact', heroSchema)