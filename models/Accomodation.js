// models/Accommodation.js
const mongoose = require('mongoose');

const accommodationSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  hotel: String,
  checkInDate: Date,
  checkOutDate: Date,
  status: { type: String, enum: ['booked', 'checked_in', 'cancelled'], default: 'booked' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Accommodation', accommodationSchema);
