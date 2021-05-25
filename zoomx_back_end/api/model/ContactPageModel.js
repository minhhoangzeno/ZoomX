const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const contactPage = new Schema({
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
    },
    address:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    numberPhone:{
        type:String,
        require:true
    },
    timeHotline:{
        type:String,
        require:true
    },
    numberHotline:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model('contactPage',contactPage)