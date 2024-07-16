// routes/products.js
const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

router.get('/', async (req, res) => {
  // Get all products
});

router.post('/', async (req, res) => {
  // Add a new product (admin only)
});

module.exports = router;