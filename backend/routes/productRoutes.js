// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Add a product
router.post('/add', async (req, res) => {
  const { name, description, price, category, stock, image } = req.body;
  
  const product = new Product({ name, description, price, category, stock, image });
  
  try {
    await product.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add product' });
  }
});

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
