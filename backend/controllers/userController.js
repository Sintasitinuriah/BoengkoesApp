const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse');

// Update user data
exports.updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const updates = req.body;

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