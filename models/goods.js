const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    specifications: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
});


const Model = mongoose.model('Goods', UserSchema);
module.exports = Model;