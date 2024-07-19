const Cart = require('../models/cart');

// Controller untuk menambah item ke keranjang
exports.addToCart = async (req, res) => {
    const { user, items } = req.body;

    try {
        const cart = await Cart.findOneAndUpdate(
            { user: user },
            { $addToSet: { items: { $each: items } } }, // Menggunakan $addToSet untuk menghindari duplikasi item
            { new: true, upsert: true }
        );

        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller untuk mendapatkan keranjang pengguna
exports.getCart = async (req, res) => {
    const userId = req.params.userId;

    try {
        const cart = await Cart.findOne({ user: userId }).populate('items.product', 'name price');

        if (!cart) {
            return res.status(404).json({ message: 'Keranjang tidak ditemukan' });
        }

        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller untuk menghapus item dari keranjang
exports.removeFromCart = async (req, res) => {
    const { userId, itemId } = req.params;

    try {
        const cart = await Cart.findOneAndUpdate(
            { user: userId },
            { $pull: { items: { _id: itemId } } },
            { new: true }
        );

        if (!cart) {
            return res.status(404).json({ message: 'Keranjang tidak ditemukan' });
        }

        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCartItem = async (req, res) => {
    const { userId, itemId } = req.params;
    const { quantity } = req.body;

    try {
        const cart = await Cart.findOneAndUpdate(
            { user: userId, 'items._id': itemId },
            { $set: { 'items.$.quantity': quantity } },
            { new: true }
        );

        if (!cart) {
            return res.status(404).json({ message: 'Item di keranjang tidak ditemukan' });
        }

        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};