// const express = require('express');
// const app = express();
// require('dotenv').config();
// const mongoose = require('mongoose');

// // CONNECT DATABASE
// mongoose.connect(process.env.DATABASE)
// .then(()=>{
  
//   const port = process.env.PORT || 8020;

//   app.listen(port, () => {
//     console.log(`App is running at ${port}`);
//   })
// })
// .catch((error)=>console.log(error))

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://ac-djin4ll-shard-00-00.qjdv66o.mongodb.net:27017,ac-djin4ll-shard-00-01.qjdv66o.mongodb.net:27017,ac-djin4ll-shard-00-02.qjdv66o.mongodb.net:27017/sample_mflix?ssl=true&authSource=admin";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);