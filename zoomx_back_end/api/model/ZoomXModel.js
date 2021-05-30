const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const zoomxSchema = new Schema({
    content: {
        type: String,
        require: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'file'
    },
    imageCover: {
        type: Schema.Types.ObjectId,
        ref: 'image'
    }
})

module.exports = mongoose.model('zoomx', zoomxSchema);