const mongoose = require('mongoose');
autoIncrement = require('mongoose-auto-increment');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  published: {
    type: String,
    required: true
  },
  comentId: {
    type: String,
    required: true
  }
  });

 
ArticleSchema.plugin(autoIncrement.plugin, 'Article');

const Model = mongoose.model('Article', ArticleSchema);
module.exports = Model;