// models/Ride.js
const mongoose = require('mongoose');

const rideSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // reference to User model
  pickupLocation: String,
  destination: String,
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ride', rideSchema);
