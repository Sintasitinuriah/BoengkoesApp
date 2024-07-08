const express = require('express');
const router = express.Router();
const { isAuthentication } = require('../middleware/auth');
const {
  createStore,
  getStores,
  getStore,
  updateStore,
  deleteStore
} = require('../controllers/storeController');

router
  .route('/store/')
  .post(isAuthentication, createStore)
  .get(isAuthentication, getStores);

router
  .route('/store/:id')
  .get(isAuthentication, getStore)
  .put(isAuthentication, updateStore)
  .delete(isAuthentication, deleteStore);

module.exports = router;
