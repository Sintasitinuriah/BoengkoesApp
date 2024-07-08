const express = require('express');
const router = express.Router();
const { isAuthentication } = require('../middleware/auth');
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

router
  .route('/')
  .post(isAuthentication, createProduct)
  .get(isAuthentication, getProducts);

router
  .route('/:id')
  .get(isAuthentication, getProduct)
  .put(isAuthentication, updateProduct)
  .delete(isAuthentication, deleteProduct);

module.exports = router;
