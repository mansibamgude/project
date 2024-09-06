// routes/payment.js
const express = require('express');
const router = express.Router();

// Sample payments data
const payments = [];

// Route to handle adding payments
router.post('/add', (req, res) => {
  const payment = req.body;

  if (!payment) {
    return res.status(400).json({ message: 'Invalid payment data' });
  }

  payments.push(payment); // Add the payment to the payments array
  res.status(201).json({ message: 'Payment added successfully', payment });
});

// Route to get all payments
router.get('/', (req, res) => {
  res.status(200).json(payments);
});

module.exports = router;
