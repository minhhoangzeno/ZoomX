const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const videoSchema = new Schema({
    videoUrl: {
        type: String,
        require: true
    },
    imageCover: {
        type: Schema.Types.ObjectId,
        ref: 'image'
    }
})
module.exports = mongoose.model('video', videoSchema);