// routes/cart.js
const express = require('express');
const { addItemToCart, getUserCart, updateCartItem, removeItemFromCart } = require('../controllers/cartController');


const router = express.Router();

router.post('/cart', addItemToCart);
router.get('/cart', getUserCart);
router.put('/cart', updateCartItem);
router.delete('/cart', removeItemFromCart);

module.exports = router;
