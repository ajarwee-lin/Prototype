// models/Order.js
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ name: String, quantity: Number, price: Number }],
  status: { type: String, enum: ['pending', 'delivered', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
