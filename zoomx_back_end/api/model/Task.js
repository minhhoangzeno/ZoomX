const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: String
})
const Task = mongoose.model('Task',taskSchema)
module.exports = Task;