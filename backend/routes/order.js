// routes/order.js
const express = require('express');
const {
    createOrder,
    getOrders,
    getOrder,
    updateOrderStatus,
    deleteOrder
} = require('../controllers/orderController');


const router = express.Router();

router.post('/orders', createOrder);
router.get('/orders', getOrders);
router.get('/orders/:id', getOrder);
router.put('/orders/:id/status', updateOrderStatus);
router.delete('/orders/:id', deleteOrder);

module.exports = router;
