const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const investmentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    description: String,
    imageUrl: String 
});

const Invesment = mongoose.model('Invesment',investmentSchema)
module.exports = Invesment;