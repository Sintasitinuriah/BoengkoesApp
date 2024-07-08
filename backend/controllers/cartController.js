// controllers/cartController.js
const Cart = require('../models/cart');
const Product = require('../models/product');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

// Add item to cart
exports.addItemToCart = asyncHandler(async (req, res, next) => {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
        return next(new ErrorResponse('Product not found', 404));
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        cart = new Cart({ user: req.user._id, items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

    if (itemIndex > -1) {
        // If item already exists, update the quantity
        cart.items[itemIndex].quantity += quantity;
    } else {
        // If item does not exist, add it to the cart
        cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(201).json({ success: true, data: cart });
});

// Get user cart
exports.getUserCart = asyncHandler(async (req, res, next) => {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart) {
        return next(new ErrorResponse('Cart not found', 404));
    }
    res.status(200).json({ success: true, data: cart });
});

// Update item quantity in cart
exports.updateCartItem = asyncHandler(async (req, res, next) => {
    const { productId, quantity } = req.body;

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
        return next(new ErrorResponse('Cart not found', 404));
    }

    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

    if (itemIndex > -1) {
        if (quantity > 0) {
            cart.items[itemIndex].quantity = quantity;
        } else {
            cart.items.splice(itemIndex, 1);
        }
    } else {
        return next(new ErrorResponse('Product not found in cart', 404));
    }

    await cart.save();
    res.status(200).json({ success: true, data: cart });
});

// Remove item from cart
exports.removeItemFromCart = asyncHandler(async (req, res, next) => {
    const { productId } = req.body;

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
        return next(new ErrorResponse('Cart not found', 404));
    }

    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

    if (itemIndex > -1) {
        cart.items.splice(itemIndex, 1);
    } else {
        return next(new ErrorResponse('Product not found in cart', 404));
    }

    await cart.save();
    res.status(200).json({ success: true, data: cart });
});
