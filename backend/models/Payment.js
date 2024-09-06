// models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  paymentMethod: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);
