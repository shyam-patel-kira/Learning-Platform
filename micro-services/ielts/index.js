import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

import readingRouter from "./Reading_Routes/reading.js";
import readingAnswerRouter from "./Reading_Routes/reading_answerkey.js";
import speakingRouter from "./Speaking_Routes/speaking.js";
import listeningRouter from "./Listening_Routes/listening.js"
import listeningAnswerRouter from "./Listening_Routes/listening_answerkey.js"
import resultRouter from './result_reading.js'
import resultListeningRouter from './result_listening.js' 

const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/ielts", readingRouter)
app.use("/ielts", readingAnswerRouter)
app.use("/ielts", speakingRouter)
app.use("/ielts",listeningRouter)
app.use("/ielts",listeningAnswerRouter)
app.use("./ielts",resultRouter)
app.use("/ielts",resultListeningRouter)

const CONNECTION_URL = process.env.DB_CONNECT;
const PORT = process.env.PORT || 4955;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database connected");
});

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});