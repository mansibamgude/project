// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  totalAmount: { type: Number, required: true },
  customer: { type: String, required: true },
  address: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
