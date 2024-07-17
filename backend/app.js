const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');

// Import Routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const storeRoutes = require('./routes/store');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');
const usersRoutes = require('./routes/user');

const app = express();

// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Use Routes
app.use('/api', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/v1/', categoryRoutes);
app.use('/api/v1/', storeRoutes);
app.use('/api', cartRoutes);
app.use('/api', orderRoutes);
app.use('/api', usersRoutes);

// Error Middleware
app.use(errorHandler);

const corsOptions = {
  origin: 'http://localhost:3000', // Ganti dengan asal klien Anda
  credentials: true, // Mengizinkan pengiriman cookies
};

app.use(cors(corsOptions));

// Check if environment variables are loaded correctly
console.log("MONGODB_URI:", process.env.MONGODB_URI);
console.log("PORT:", process.env.PORT);

const PORT = process.env.PORT || 3000;
const startServer = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@clustercapstone.qjdv66o.mongodb.net/boengkoes_app_Db?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('MongoDB connected');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

startServer();