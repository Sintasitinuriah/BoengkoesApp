const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse');
const bcrypt = require('bcryptjs');

exports.updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const updates = req.body;

    // Jika password disertakan dalam request body, enkripsi password
    if (updates.password) {
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(updates.password, salt);
    }

    // Update user dengan runValidators agar validasi Mongoose tetap dijalankan
    const user = await User.findByIdAndUpdate(userId, updates, { new: true, runValidators: true });

    if (!user) {
      return next(new ErrorResponse('User not found', 404));
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 400));
  }
};


exports.deleteUser = async (req, res, next) => {
    try {
      const { userId } = req.params;
  
      const user = await User.findByIdAndDelete(userId);
  
      if (!user) {
        return next(new ErrorResponse('User not found', 404));
      }
  
      res.status(200).json({
        success: true,
        data: {}
      });
    } catch (error) {
      next(new ErrorResponse(error.message, 400));
    }
};