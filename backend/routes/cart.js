// routes/cart.js
const express = require('express');
const { addItemToCart, getUserCart, updateCartItem, removeItemFromCart } = require('../controllers/cartController');
const { isAuthentication } = require('../middleware/auth');

const router = express.Router();

router.post('/cart', isAuthentication, addItemToCart);
router.get('/cart', isAuthentication, getUserCart);
router.put('/cart', isAuthentication, updateCartItem);
router.delete('/cart', isAuthentication, removeItemFromCart);

module.exports = router;
