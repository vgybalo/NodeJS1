const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  fromName: {
    type: String,
    required: true
  },
  toName: {
    type: String,
    required: true
  },
  departAt: {
    type: String,
    required: true
  },
  vehicle: {
    type: String,
    required: true
  }
});

const Model = mongoose.model('Trip', TripSchema);
module.exports = Model;