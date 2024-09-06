// routes/feedback.js
const express = require('express');
const router = express.Router();

// Sample feedback data storage
const feedbacks = [];

// Route to handle adding feedback
router.post('/add', (req, res) => {
  const feedback = req.body;

  if (!feedback || !feedback.productId || !feedback.userId || !feedback.rating || !feedback.comment) {
    return res.status(400).json({ message: 'Invalid feedback data' });
  }

  feedbacks.push(feedback); // Add feedback to the array
  res.status(201).json({ message: 'Feedback added successfully', feedback });
});

// Route to get feedback by product ID
router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  const productFeedbacks = feedbacks.filter(f => f.productId === productId);

  res.status(200).json(productFeedbacks);
});

module.exports = router;
