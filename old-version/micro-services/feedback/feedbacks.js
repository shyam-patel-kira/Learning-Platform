// Load Express
  const express = require("express");
  const app = express();
  const bodyParser = require("body-parser");

  app.use(bodyParser.json());

// Load Mongoose
  const mongoose = require('mongoose');
  
  require("./Feedback");
  const FeedBack = mongoose.model("Feedback");

  // Connect to MongoDB
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useUnifiedTopology', true);
  mongoose.connect("mongodb://kira:kirash@testcluster-shard-00-00.dhxer.mongodb.net:27017,testcluster-shard-00-01.dhxer.mongodb.net:27017,testcluster-shard-00-02.dhxer.mongodb.net:27017/Feedback?ssl=true&replicaSet=atlas-13ts93-shard-0&authSource=admin&retryWrites=true&w=majority", () => {
    console.log("Database connected sucessfully!");
  })


app.get('/', (req, res) => {
      
  res.send("This is out main EndPoint");
}) 

// Create Functionality
app.post("/feedback", (req, res) => {
    console.log(req.body)
    //res.send("Testing our feedback route");
    // This is for create functionality
  
    var newFeedback = {
      subject : req.body.subject,
      author  : req.body.author,
      content : req.body.content,
      email   : req.body.email
  }
  console.log("newfeedaback defined")
  // Create a new Feedback
  var feedBack = new FeedBack(newFeedback);
  console.log("newfeedaback created")
  
  console.log("newfeedaback saving to db")
  feedBack.save().then(() => {
    console.log("New feedback created ");
  }).catch((err) => {
    if(err){
      throw err;
    }
  })
  console.log("newfeedaback saved to db")
  res.send("New Feedback successfully created");
  console.log("POST newfeedaback saved to db")
})

// List all the feedbacks 
app.get("/feedbacks", (req, res) => {

  FeedBack.find().then((feedbacks) => {
    res.json(feedbacks)
  }).catch(err => {
    if(err){
      throw err;
    }
  })
})

app.delete("/feedback/:id", (req, res) => {

  FeedBack.findOneAndRemove(req.params.id).then(() => {
    res.send("feedback removed succesfully");
  }).catch(err => {
    if(err){
      throw err;
    }
  })  

})


  // Finding by ID
  // app.get("/feedback/:id", (req, res) => {
  //   //res.send(req.params.id)
  //   FeedBack.findById(req.params.id).then((feedback) => {

  //   if(feedback){

  //     res.json(feedback)
  //   } else{
  //     res.sendStatus(404);
  //   }    

  //   }).catch(err => {
  //     if(err){
  //       throw err;
  //     }
  //   })
  // })

app.listen(4545, () => {
  console.log("Up and running! This is our feedback service");
})