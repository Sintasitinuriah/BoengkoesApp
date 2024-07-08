const express = require('express');
const router = express.Router();
const { isAuthentication } = require('../middleware/auth');
const {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController');

router
  .route('/category')
  .post(isAuthentication, createCategory)
  .get(isAuthentication, getCategories);

router
  .route('/category/:id')
  .get(isAuthentication, getCategory)
  .put(isAuthentication, updateCategory)
  .delete(isAuthentication, deleteCategory);

module.exports = router;
