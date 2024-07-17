const express = require('express');
const { updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.put('/user/:userId', updateUser);
router.delete('/user/:userId', deleteUser);

module.exports = router;
