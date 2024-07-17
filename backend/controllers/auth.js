const User = require('../models/user');
const mongoose = require('mongoose');
const ErrorResponse = require('../utils/errorResponse')

// Signup user
exports.signup = async (req, res, next) => {
    const { name, email, password } = req.body;
  
    try {
      // Ensure the connection is ready
      if (mongoose.connection.readyState !== 1) {
        throw new Error('Database connection is not ready');
      }
  
      const userExist = await User.findOne({ email });
      // if (userExist) {
      //   return next(new ErrorResponse('E-mail sudah tersedia', 400 ));
      // }
  
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json({
        success: true,
        data: user
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
};

// Signin user
exports.signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
          return next(new ErrorResponse('Email dan password tidak boleh kososng', 400 ));
        }

        // check if email already exists
        const user = await User.findOne({ email });
        if (!user) {
          return next(new ErrorResponse('Email tidak ditemukan', 400 ));
        }

        // verify user password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
          return next(new ErrorResponse('Password tidak sesuai', 400 ));
        }

        generateToken(user, 200, res);
    } catch (err) {
      return next(new ErrorResponse('Tidak dapat login, silahkan check credentials', 400 ));
    }
};

const generateToken = async (user, statusCode, res) => {
  const token = await user.jwtGenerateToken();

  // Konversi EXPIRE_TOKEN ke milidetik
  const expireTokenMs = parseInt(process.env.EXPIRE_TOKEN, 10);

  // Validasi bahwa expireTokenMs adalah angka yang valid
  if (isNaN(expireTokenMs)) {
    throw new Error('EXPIRE_TOKEN environment variable is not a valid number');
  }

  const options = {
    httpOnly: true,
    expires: new Date(Date.now() + expireTokenMs) 
  };

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({ success: true, token });
};

// log out user
exports.logout = (req, res, next)=>{
  res.clearCookie('token');
  res.status(200).json({
    success: true,
    message: "Keluar"
  });
}

//User Profile
 exports.userProfile = async (req, res, next)=>{
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    data: user
  });
 }

//Single User by id
exports.singleUser = async (req, res, next) => {
  try {
    // Ensure the connection is ready
    if (mongoose.connection.readyState !== 1) {
      throw new Error('Database connection is not ready');
    }

    const user = await User.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (err) {
    next(err);
  }
};