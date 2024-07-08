const express = require('express');
const router = express.Router();
const {signup, signin, logout, singleUser, userProfile} = require('../controllers/auth')
const {isAuthentication} = require('../middleware/auth');


router.post('/signup', signup);
router.post('/signin', signin);
router.get('/logout', logout);
router.get('/getprofile', isAuthentication, userProfile);
router.get('/user/:id', singleUser);

module.exports = router;
