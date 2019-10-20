const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'authors'          
        }],
  });



const Model = mongoose.model('Book', BooksSchema);
module.exports = Model;