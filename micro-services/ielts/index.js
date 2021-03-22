import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser'
import dotenv from 'dotenv';

dotenv.config();

import readingRouter from './Reading_Routes/reading.js'
import readingAnswerRouter from './Reading_Routes/reading_answerkey.js';

const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }))

app.use('/ielts',readingRouter)
app.use('/ielts',readingAnswerRouter)

const CONNECTION_URL = process.env.DB_CONNECT;
const PORT = process.env.PORT || 4955

mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true })

const connection = mongoose.connection

connection.once('open',() => {
    console.log("Database connected")
})

app.listen(PORT,() => {
    console.log(`Server is running on the port ${PORT}`)
})
