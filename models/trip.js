const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  fromName: String,
  toName: String,
  departAt: String,
  vehicle: String,


});

const Model = mongoose.model('Trip', TripSchema);
module.exports = Model;