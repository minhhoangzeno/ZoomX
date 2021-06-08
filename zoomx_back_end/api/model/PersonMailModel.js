const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const personMail = new Schema({
    mail: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
}, {
    bufferCommands: true,
    autoCreate: true
})
module.exports = mongoose.model('personMail',personMail)