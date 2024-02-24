const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"]
    }
});

UserSchema.plugin(uniqueValidator);

// Using arrow function with 'next' won't work in this case
UserSchema.pre('save', function(next) {
    const user = this;

    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    })
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
