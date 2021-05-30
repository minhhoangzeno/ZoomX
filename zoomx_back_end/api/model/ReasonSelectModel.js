const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const reasonSelectSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    imageCover: {
        type: Schema.Types.ObjectId,
        ref: 'image'
    }
})

module.exports = mongoose.model('reasonSelect', reasonSelectSchema);