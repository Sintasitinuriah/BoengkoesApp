// const express = require('express');
// const app = express();
// require('dotenv').config();
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');

// //import Routes
// const userRoutes = require('./routes/user');


// async function run() {
//   let client;
//   try {
//     const uri = process.env.MONGODB_URI;
//     client = new MongoClient(uri, {
//       serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       }
//     });

//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     if (client) {
//       await client.close();
//     }
//   }
// }

// run().catch(console.dir);

// // MIDDLEWARE
// app.use(morgan('dev'));
// app.use(bodyParser.json());

// app.use('/api', userRoutes);

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Server is running on port http://localhost:${port}`);
// });
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Import Routes
const userRoutes = require('./routes/user');

const app = express();

// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // 5 seconds timeout
  socketTimeoutMS: 45000 // 45 seconds socket timeout
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Use Routes
app.use('/api', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
