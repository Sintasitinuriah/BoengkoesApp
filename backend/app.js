const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

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

// Setup storage and filename handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API endpoint to upload file
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.status(200).json({
    message: 'File uploaded successfully',
    fileUrl: `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`,
  });
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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