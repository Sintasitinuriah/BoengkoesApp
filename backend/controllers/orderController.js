// controllers/orderController.js
const Order = require('../models/order');
const Cart = require('../models/cart');
const Product = require('../models/product');
const Store = require('../models/store');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

// Create a new order from the cart
exports.createOrder = asyncHandler(async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');

        if (!cart || cart.items.length === 0) {
            return next(new ErrorResponse('Keranjang kosong', 400));
        }

        const store = await Store.findById(req.body.store);
        if (!store) {
            return next(new ErrorResponse('Toko tidak ditemukan', 404));
        }

        const orderItems = cart.items.map(item => ({
            product: item.product._id,
            quantity: item.quantity,
            price: item.product.price
        }));

        const order = await Order.create({
            user: req.user._id,
            store: req.body.store,
            products: orderItems
        });

        // Decrease the stock of the products ordered
        for (const item of cart.items) {
            const product = await Product.findById(item.product._id);
            product.stock -= item.quantity;
            product.sold += item.quantity;
            await product.save();
        }

        // Clear the cart after order creation
        cart.items = [];
        await cart.save();

        res.status(201).json({
            success: true,
            data: order
        });
    } catch (error) {
        next(new ErrorResponse('Gagal membuat pesanan', 500));
    }
});

// Get all orders
exports.getOrders = asyncHandler(async (req, res, next) => {
    try {
        const orders = await Order.find().populate('user').populate('store').populate('products.product');

        res.status(200).json({
            success: true,
            data: orders
        });
    } catch (error) {
        next(new ErrorResponse('Gagal mengambil pesanan', 500));
    }
});

// Get a single order by ID
exports.getOrder = asyncHandler(async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id).populate('user').populate('store').populate('products.product');

        if (!order) {
            return next(new ErrorResponse('Pesanan tidak ditemukan', 404));
        }

        res.status(200).json({
            success: true,
            data: order
        });
    } catch (error) {
        next(new ErrorResponse('Gagal mengambil pesanan', 500));
    }
});

// Update an order's status
exports.updateOrderStatus = asyncHandler(async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return next(new ErrorResponse('Pesanan tidak ditemukan', 404));
        }

        order.status = req.body.status;
        await order.save();

        res.status(200).json({
            success: true,
            data: order
        });
    } catch (error) {
        next(new ErrorResponse('Gagal memperbarui status pesanan', 500));
    }
});

// Delete an order by ID
exports.deleteOrder = asyncHandler(async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return next(new ErrorResponse('Pesanan tidak ditemukan', 404));
        }

        await order.remove();

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        next(new ErrorResponse('Gagal menghapus pesanan', 500));
    }
});
