// Load Express
  const express = require("express");
  const app = express();
// Load Mongoose
  const mongoose = require("mongoose");
  
  // Connect
  mongoose.connect("mongodb+srv://kira:kirash@testcluster.dhxer.mongodb.net/TestCluster?retryWrites=true&w=majority", () => {
    console.log("Database connected sucessfully!");
  })
  
app.get('/', (req, res) => {
  res.send("This is out main EndPoint");
})

app.listen(4545, () => {
  console.log("Up and running! This is our feedback service");
})