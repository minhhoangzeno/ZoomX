const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const sloganSchema = new Schema({
    content: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    career: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('slogan', sloganSchema);