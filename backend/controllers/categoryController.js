const Category = require('../models/category');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

// Create a new category
exports.createCategory = asyncHandler(async (req, res, next) => {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    next(new ErrorResponse('Gagal membuat kategori', 500));
  }
});

// Get all categories
exports.getCategories = asyncHandler(async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    next(new ErrorResponse('Gagal mengambil kategori', 500));
  }
});

// Get a single category by ID
exports.getCategory = asyncHandler(async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return next(new ErrorResponse('Kategori tidak ditemukan', 404));
    }
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    next(new ErrorResponse('Gagal mengambil kategori', 500));
  }
});

// Update a category by ID
exports.updateCategory = asyncHandler(async (req, res, next) => {
  try {
    let category = await Category.findById(req.params.id);
    if (!category) {
      return next(new ErrorResponse('Kategori tidak ditemukan', 404));
    }
    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    next(new ErrorResponse('Gagal memperbarui kategori', 500));
  }
});

// Delete a category by ID
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return next(new ErrorResponse('Kategori tidak ditemukan', 404));
    }
    await category.remove();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(new ErrorResponse('Gagal menghapus kategori', 500));
  }
});
