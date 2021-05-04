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
const verbal_routes = require("./Verbal_Routes/verbal.js");
const verbalanswers_routes = require("./Verbal_Routes/verbal_answerkey.js");
const verbalresult_routes = require("./Verbal_Routes/verbal_result.js");
const quant_routes = require("./Quant_Routes/quant.js");
const quantanswers_routes = require("./Quant_Routes/quant_answerkey.js");
const quantresult_routes = require("./Quant_Routes/quant_result.js");

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
appRouter.use("/gre", verbalanswers_routes);
appRouter.use("/gre", verbalresult_routes);
appRouter.use("/gre", quant_routes);
appRouter.use("/gre", quantanswers_routes);
appRouter.use("/gre", quantresult_routes);

appRouter.use('/', (req, res,next)=>{
   res.send('<h1> You have reached our middleware. Maybe u r lost. </h1>');
});

appRouter.listen(7545, () => {
console.log("Up and running! This is our gre service");
})
