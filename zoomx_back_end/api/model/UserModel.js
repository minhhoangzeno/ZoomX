const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    displayName: {
        type: String,
        require: true
    },
    avatar: {
        type: Schema.Types.ObjectId,
        ref: 'image'
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})
userSchema.pre('save', function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next()
    })
})

const User = mongoose.model('user', userSchema);
module.exports = User;