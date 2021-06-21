
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
module.exports = mongoose.model('heroProject', heroSchema)