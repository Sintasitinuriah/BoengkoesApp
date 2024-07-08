const mongoose = require('mongoose');

const createCategory =  new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Silahkan tambahkan category name'],
        trim: true,
    },

},{timestamps: true});

module.exports = mongoose.model('Category', createCategory);