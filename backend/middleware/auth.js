const jwt = require('jsonwebtoken');
const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse');

// check if user is authenticated
exports.isAuthentication = async (req, res, next) => {
    const { token } = req.cookies;

  if (!token) {
    return next(new ErrorResponse('You must be logged in', 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, { ignoreExpiration: true });
    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse('User not found', 404));
    }

    const currentTime = Math.floor(Date.now() / 1000); 
    const tokenExpTime = decoded.exp; 
    const bufferTime = 60 * 10; 

    if (tokenExpTime - currentTime < bufferTime) {
      const newToken = await user.jwtGenerateToken();

      res.cookie('token', newToken, {
        httpOnly: true,
        expires: new Date(Date.now() + parseInt(process.env.EXPIRE_TOKEN, 10))
      });

      req.user = user;
    }

    next();
  } catch (error) {
    return next(new ErrorResponse('You must be logged in', 401));
  }
};
  