const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// Import routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const storeRoutes = require('./routes/store');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');
const usersRoutes = require('./routes/user');
const errorHandler = require('./middleware/error');


const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use('/api/v1/categories', categoryRoutes);
app.use('/api', authRoutes);
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api/v1/stores', storeRoutes);
app.use('/api', cartRoutes);
app.use('/api', orderRoutes);
app.use('/api', usersRoutes);

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

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
