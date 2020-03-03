const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
});


const Model = mongoose.model('User2', UserSchema);
module.exports = Model;