// models/Feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  customer: { type: String, required: true },
  rating: { type: Number, required: true },
  message: { type: String }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
