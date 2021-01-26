// Load Express
  const express = require("express");
  const app = express();
  const bodyParser = require("body-parser");

  app.use(bodyParser.json());
// Load Mongoose
  var mongoose = require("mongoose");
  //require("./FeedBack");
  //require("/home/kira/Networking/Learning-Platform/feedback/FeedBack.js");
  //const FeedBack = mongoose.model("FeedBack");


  // Connect
  mongoose.connect("mongodb+srv://kira:kirash@testcluster.dhxer.mongodb.net/TestCluster?retryWrites=true&w=majority", { useNewUrlParser: true } , () => {
    console.log("Database connected sucessfully!");
  })
  
app.get('/', (req, res) => {
      
  res.send("This is out main EndPoint");
}) 
// Create Functionality
app.post("/feedback", (req, res) => {
    console.log(req.body)
  // This is for create functionality
  res.send("Testing our book route");
  
})

app.listen(4545, () => {
  console.log("Up and running! This is our feedback service");
})