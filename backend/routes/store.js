const express = require('express');
const router = express.Router();

const {
  createStore,
  getStores,
  getStore,
  updateStore,
  deleteStore
} = require('../controllers/storeController');

router
  .route('/store/')
  .post(createStore)
  .get(getStores);

router
  .route('/store/:id')
  .get(getStore)
  .put(updateStore)
  .delete(deleteStore);

module.exports = router;
