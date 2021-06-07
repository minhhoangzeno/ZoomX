const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const iconSchema = new Schema({
    imageCover: {
        type: Schema.Types.ObjectId,
        ref: 'image'
    },
    url: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('icon', iconSchema);