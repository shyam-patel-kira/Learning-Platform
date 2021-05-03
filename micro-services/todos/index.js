// Load Express
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
//Server Optimisation
const compression = require(`compression`);
//config file
const dotenv = require(`dotenv`)
dotenv.config();
// All Routes
const todos_routes = require("./Routes/todos.js");

const todosRouter = express();

// Connect to MongoDB
//console.log(process.env.DB_CONNECT);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("Database connected to todos Service sucessfully!");
})

todosRouter.use(bodyParser.json());
todosRouter.use(compression());
todosRouter.use(cors());
todosRouter.use(express.json());
todosRouter.use("/todos", todos_routes);


todosRouter.use('/', (req, res,next)=>{
   res.send('<h1> You have reached our middleware. Maybe u r lost. </h1>');
});

todosRouter.listen(6545, () => {
console.log("Up and running! This is our todos service");
})
