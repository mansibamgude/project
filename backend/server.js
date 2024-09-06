const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('./models/Product'); // Import the Product model
const orderRoutes = require('./routes/order'); // Import the order routes
const paymentRoutes = require('./routes/payment'); // Import the payment routes
const feedbackRoutes = require('./routes/feedback'); // Import the feedback routes

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON request body
app.use(bodyParser.json()); // Middleware to parse JSON request body

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

// Define your POST route for adding products
app.post('/api/products/add', async (req, res) => {
  try {
    const { name, description, price, category, stock, image } = req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      stock,
      image
    });
    
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ error: 'Error adding product' });
  }
});

// Define your POST route for adding orders
app.post('/api/orders/add', async (req, res) => {
  try {
    const orderData = req.body;
    // Implement your order creation logic here
    // Example: const newOrder = new Order(orderData);
    // await newOrder.save();
    res.status(201).json({ message: 'Order added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add order' });
  }
});

// Define your GET route for retrieving orders
app.get('/api/orders', async (req, res) => {
  try {
    // Implement your logic to fetch orders
    // Example: const orders = await Order.find();
    // res.status(200).json(orders);
    res.status(200).json({ message: 'Orders fetched successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
});

// Define your POST route for adding payments
app.post('/api/payments/add', async (req, res) => {
  try {
    const paymentData = req.body;
    // Implement your payment creation logic here
    // Example: const newPayment = new Payment(paymentData);
    // await newPayment.save();
    res.status(201).json({ message: 'Payment added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add payment' });
  }
});

// Define your GET route for retrieving payments
app.get('/api/payments', async (req, res) => {
  try {
    // Implement your logic to fetch payments
    // Example: const payments = await Payment.find();
    // res.status(200).json(payments);
    res.status(200).json({ message: 'Payments fetched successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch payments' });
  }
});

// Define your POST route for adding feedback
app.post('/api/feedback/add', async (req, res) => {
  try {
    const feedback = req.body;
    // Implement your feedback creation logic here
    // Example: const newFeedback = new Feedback(feedback);
    // await newFeedback.save();
    res.status(201).json({ message: 'Feedback added successfully', feedback });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add feedback' });
  }
});

// Define your GET route for retrieving feedback by product ID
app.get('/api/feedback/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    // Implement your logic to fetch feedback for a specific product
    // Example: const feedbacks = await Feedback.find({ productId });
    // res.status(200).json(feedbacks);
    res.status(200).json({ message: 'Feedback fetched successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch feedback' });
  }
});

// Set up the routes for orders
app.use('/api/orders', orderRoutes);

// Set up the routes for payments
app.use('/api/payments', paymentRoutes);

// Set up the routes for feedback
app.use('/api/feedback', feedbackRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
