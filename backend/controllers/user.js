const User = require('../models/user');
const mongoose = require('mongoose');


exports.signup = async (req, res, next) => {
    const { name, email, password } = req.body;
  
    try {
      // Ensure the connection is ready
      if (mongoose.connection.readyState !== 1) {
        throw new Error('Database connection is not ready');
      }
  
      const userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(400).json({
          success: false,
          message: 'E-mail sudah tersedia'
        });
      }
  
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json({
        success: true,
        data: user
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        success: false,
        message: err.message
      });
    }
};