const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 8020;

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});