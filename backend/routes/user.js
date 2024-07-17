const express = require('express');
const { updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.put('/users/:userId', updateUser);
router.delete('/users/:userId', deleteUser);

module.exports = router;
