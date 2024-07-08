const Store = require('../models/store');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

// Create a new store
exports.createStore = asyncHandler(async (req, res, next) => {
  try {
    const { name, phoneNumber, owner, district, city, province } = req.body;
    const store = await Store.create({
      name,
      phoneNumber,
      owner,
      district,
      city,
      province
    });
    res.status(201).json({ success: true, data: store });
  } catch (error) {
    next(new ErrorResponse('Gagal membuat toko', 500));
  }
});

// Get all stores
exports.getStores = asyncHandler(async (req, res, next) => {
  try {
    const stores = await Store.find().populate('owner');
    res.status(200).json({ success: true, data: stores });
  } catch (error) {
    next(new ErrorResponse('Gagal mengambil toko', 500));
  }
});

// Get a single store by ID
exports.getStore = asyncHandler(async (req, res, next) => {
  try {
    const store = await Store.findById(req.params.id).populate('owner');
    if (!store) {
      return next(new ErrorResponse('Toko tidak ditemukan', 404));
    }
    res.status(200).json({ success: true, data: store });
  } catch (error) {
    next(new ErrorResponse('Gagal mengambil toko', 500));
  }
});

// Update a store by ID
exports.updateStore = asyncHandler(async (req, res, next) => {
  try {
    let store = await Store.findById(req.params.id);
    if (!store) {
      return next(new ErrorResponse('Toko tidak ditemukan', 404));
    }
    store = await Store.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, data: store });
  } catch (error) {
    next(new ErrorResponse('Gagal memperbarui toko', 500));
  }
});

// Delete a store by ID
exports.deleteStore = asyncHandler(async (req, res, next) => {
  try {
    const store = await Store.findById(req.params.id);
    if (!store) {
      return next(new ErrorResponse('Toko tidak ditemukan', 404));
    }
    await store.remove();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(new ErrorResponse('Gagal menghapus toko', 500));
  }
});
