const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    } 
});


const Model = mongoose.model('User4', UserSchema);
module.exports = Model;