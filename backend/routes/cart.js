const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Route untuk menambah item ke keranjang
router.post('/cart', cartController.addToCart);
router.get('/cart/:userId', cartController.getCart);
router.delete('/cart/:userId/:itemId', cartController.removeFromCart);
router.put('/cart/update/:userId/:itemId', cartController.updateCartItem);

module.exports = router;
