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

const JWT_SECRET = process.env.TOKEN_SECRET
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN

const appRouter = express();

// Connect to MongoDB
//console.log(process.env.DB_CONNECT);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("Database connected to GRE Service sucessfully!");
})

appRouter.use(bodyParser.json());
appRouter.use(compression());
appRouter.use(cors());
appRouter.use(express.json());
// use this routes here
appRouter.use("/todos", <>);
appRouter.use("/todos", <>);
appRouter.use('/', (req, res,next)=>{
   res.send('<h1> middleware </h1>');
});

appRouter.listen(6545, () => {
console.log("Up and running! This is our gre service");
})
