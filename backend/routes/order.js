// server.js or routes/order.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Import your Order model

// POST endpoint for creating an order
router.post('/create', async (req, res) => {
  try {
    const { customerName, totalAmount, status, date, items } = req.body;
    const newOrder = new Order({
      customerName,
      totalAmount,
      status,
      date,
      items
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// server.js or routes/order.js
router.get('/', async (req, res) => {
    try {
      const orders = await Order.find({});
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  });
  

module.exports = router;
