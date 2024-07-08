// routes/order.js
const express = require('express');
const {
    createOrder,
    getOrders,
    getOrder,
    updateOrderStatus,
    deleteOrder
} = require('../controllers/orderController');
const { isAuthentication } = require('../middleware/auth');

const router = express.Router();

router.post('/orders', isAuthentication, createOrder);
router.get('/orders', isAuthentication, getOrders);
router.get('/orders/:id', isAuthentication, getOrder);
router.put('/orders/:id/status', isAuthentication, updateOrderStatus);
router.delete('/orders/:id', isAuthentication, deleteOrder);

module.exports = router;
