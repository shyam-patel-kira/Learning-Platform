// Load Express
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
//Server Optimisation

const dotenv = require(`dotenv`)
dotenv.config();
// All Routes

const JWT_SECRET = process.env.TOKEN_SECRET
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN

const app = express();

app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("Database connected to Todos Service sucessfully!");
})


app.listen(6545, () => {
console.log("Up and running! This is our Todos service");
})
