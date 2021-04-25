// Load Express
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const verbal_routes = require("./Verbal_Routes/verbal.js");
//Server Optimisation
const compression = require(`compression`);
//config file
const dotenv = require(`dotenv`)
dotenv.config();

// const verbalRouter = require("./Verbal_Routes/verbal.js")

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
appRouter.use("/gre", verbal_routes);
appRouter.use('/', (req, res,next)=>{
   res.send('<h1> first midleware: Hello Tutorials Point </h1>');
});

appRouter.listen(7545, () => {
console.log("Up and running! This is our gre service");
})


/////
/*

verbal
  RC- 7 para 7 String 1/2 QUESTION:
  SE- Fitb 7 Quuestions
  TC- MCQ
qunat - comparison, MCQ single, MCQ multiple, Numeric

*/
