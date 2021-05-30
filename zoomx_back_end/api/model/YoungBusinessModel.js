const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const youngBusinessSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    imageYoung: [{
        type: Schema.Types.ObjectId,
        ref: 'image'
    }]
})

module.exports = mongoose.model('youngBusiness', youngBusinessSchema);