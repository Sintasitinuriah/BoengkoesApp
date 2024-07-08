const Product = require('../models/product');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

// Create a new product
exports.createProduct = asyncHandler(async (req, res, next) => {
  try {
    const { name, description, price, image, category, stock, sold, store } = req.body;
    const product = await Product.create({
      name,
      description,
      price,
      image,
      category,
      stock,
      sold,
      store
    });
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    next(new ErrorResponse('Gagal membuat produk', 500));
  }
});

// Get all products
exports.getProducts = asyncHandler(async (req, res, next) => {
  try {
    const products = await Product.find().populate('category store');
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    next(new ErrorResponse('Gagal mengambil produk', 500));
  }
});

// Get a single product by ID
exports.getProduct = asyncHandler(async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('category store');
    if (!product) {
      return next(new ErrorResponse('Produk tidak ditemukan', 404));
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    next(new ErrorResponse('Gagal mengambil produk', 500));
  }
});

// Update a product by ID
exports.updateProduct = asyncHandler(async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return next(new ErrorResponse('Produk tidak ditemukan', 404));
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    next(new ErrorResponse('Gagal memperbarui produk', 500));
  }
});

// Delete a product by ID
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return next(new ErrorResponse('Produk tidak ditemukan', 404));
    }
    await product.remove();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(new ErrorResponse('Gagal menghapus produk', 500));
  }
});
