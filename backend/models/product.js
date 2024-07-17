const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Silahkan tambahkan nama Produk'],
        trim: true,
        maxlength: 32
    },
    description: {
        type: String,
        trim: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        required: [true, 'Harga produk tidak boleh kosong'],
        trim: true,
        maxlength: 32
    },
    image: {
        type: String,
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: [true, 'produk harus masuk dalam sebuah kategori']
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    sold: {
        type: Number,
        default: 0
    },
    store: {
        type: ObjectId,
        ref: 'Store',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
