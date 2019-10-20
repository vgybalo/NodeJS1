const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
  foolname: {
    type: String,
    required: true
  },
  book: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'books'          
        }],
  });



const Model = mongoose.model('Author', AuthorsSchema);
module.exports = Model;