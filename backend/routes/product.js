const express = require('express');
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductsByStore
} = require('../controllers/productController');

router.get('/bystore/:storeId', getProductsByStore);

router
  .route('/')
  .post(createProduct)
  .get(getProducts);

router
  .route('/:id')
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
