// routes/admin.js
const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');

const router = express.Router();

// Admin Authentication Middleware
const authAdmin = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = decoded;
        if (!req.user.isAdmin) return res.status(403).json({ msg: 'Not an admin' });
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
};

// Create New Product
router.post('/products', authAdmin, (req, res) => {
    const { name, description, price, category, stock, imageUrl } = req.body;
    const product = new Product({ name, description, price, category, stock, imageUrl });
    product.save().then((product) => res.json(product)).catch(err => res.status(400).json(err));
});

// Get All Products
router.get('/products', authAdmin, (req, res) => {
    Product.find().then((products) => res.json(products));
});

// Delete Product
router.delete('/products/:id', authAdmin, (req, res) => {
    Product.findByIdAndDelete(req.params.id).then(() => res.json({ msg: 'Product deleted' }));
});

// Get All Users
router.get('/users', authAdmin, (req, res) => {
    User.find().then(users => res.json(users));
});

// Get All Orders
router.get('/orders', authAdmin, (req, res) => {
    Order.find().populate('user').populate('products.product').then(orders => res.json(orders));
});

module.exports = router;
