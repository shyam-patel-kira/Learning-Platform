// Load Express
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const cors = require("cors");
//Server Optimisation
const compression = require(`compression`);
//config file
const dotenv = require(`dotenv`)
dotenv.config();

const { registerValidation } = require('./validation.js')
const { loginValidation } = require('./validation.js');


const JWT_SECRET = process.env.TOKEN_SECRET
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN

// Connect to MongoDB
//console.log(process.env.DB_CONNECT);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("Database connected to User-profile Service sucessfully!");
})

const app = express();
app.use(bodyParser.json());
app.use(compression());
app.use(cors());
require("./Models/User");
const User = mongoose.model("User");

    app.post('/user/change-password', async (req, res) => {
        const { token, newpassword: plainTextPassword } = req.body

        if (!plainTextPassword || typeof plainTextPassword !== 'string') {
            return res.json({ status: 'error', error: 'Invalid password' })
        }

        if (plainTextPassword.length < 5) {
            return res.json({
                status: 'error',
                error: 'Password too small. Should be atleast 6 characters'
            })
        }

        try {
            const user = jwt.verify(token, JWT_SECRET)
            const _id = user.id
            const password = await bcrypt.hash(plainTextPassword, 10)
            await User.updateOne(
                { _id },
                {
                    $set: { password }
                }
            )
            res.json({ status: 'ok' })
        } catch (error) {
            console.log(error)
            res.json({ status: 'error', error: ';))' })
        }
    })


    app.post('/user/login', async (req, res) => {
        const { userName, password } = req.body
        const user = await User.findOne({ userName }).lean()
        if (!user) {
            return res.json({ status: 'error', error: 'Invalid username/password' })
        }
        // Validating Login Crednetials
        const error = loginValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        if (await bcrypt.compare(password, user.password)) {
            // the username, password combination is successful
            const token = jwt.sign(
                {
                    id: user._id,
                    username: user.username
                },
                JWT_SECRET
            )
            return res.json({ status: 'ok', data: token })      //Ambiguity here we need to send headers too, res.header('auth-token', token).send(token)
        }
        res.json({ status: 'error', error: 'Invalid username/password' })
    })

    app.post('/user/register', async (req, res) => {
        //console.log(req)
        const { userName, password: plainTextPassword, email } = req.body

        //Validating User Credentials
        const error = registerValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //Checking if email already exists in Database
        const emailExists = await User.findOne({email: req.body.email});
        if(emailExists) return res.status(400).send("Email already exitst");
        if (!userName || typeof userName !== 'string') {
            return res.json({ status: 'error', error: 'Invalid username' })
        }
    
        if (!plainTextPassword || typeof plainTextPassword !== 'string') {
            return res.json({ status: 'error', error: 'Invalid password' })
        }
    
        if (plainTextPassword.length < 5) {
            return res.json({
                status: 'error',
                error: 'Password too small. Should be atleast 6 characters'
            })
        }
    
        const password = await bcrypt.hash(plainTextPassword, 10)
    
        try {
            const response = await User.create({
                userName,
                password,
                email
            })
            console.log('User created successfully: ', response)
        } catch (error) {
            if (error.code === 11000) {
                // duplicate key
                return res.json({ status: 'error', error: 'Username or email already in use' })
            }
            throw error
        }
        res.json({ status: 'ok' })
    })


// app.get('/', (req, res) => {
// res.send("This is out main EndPoint");
// }) 

app.listen(5545, () => {
console.log("Up and running! This is our user-profile service");
})