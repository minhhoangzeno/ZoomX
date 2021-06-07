const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const settingSchema = new Schema({
    phone: {
        type: String,
        require: true
    },
    mail: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('setting', settingSchema)