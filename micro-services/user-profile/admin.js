const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
//const User = require('./model/User')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const verifiedAdmin = require('./verifyAdmin');

dotenv.config();

const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("Database connected to User-profile Service sucessfully!");
})

const app = express();
app.use(bodyParser.json());
require("./User");
const User = mongoose.model("User");

app.post("/users", verifiedAdmin, async (req, res) => {
    console.log(req.body)
    const { userName, password: plainTextPassword, firstName, lastName, age, email, location, roles} = req.body; 
    const password = await bcrypt.hash(plainTextPassword, 10)
    
    try {
        const response = await User.create({
            userName,
            firstName,
            lastName,
            password,
            age,
            email,
            location,
            roles
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

app.post("/admin", async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username }).lean()
    if (!user) {
        return res.json({ status: 'error', error: 'Invalid username/password' })
    }
    if (await bcrypt.compare(password, user.password)) {
        // the username, password combination is successful
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username
            },
            JWT_SECRET_ADMIN
        )
        return res.header('auth-token-admin', token).send(token)//,res.json({ status: 'ok', data: token }) 
    }
    res.json({ status: 'error', error: 'Invalid username/password' })
})

app.get("/users", verifiedAdmin, (req, res) => {
    console.log(User.json)  
    User.find().then((users) => {
        res.json(users)
    }).catch((err) => {
        if(err){
            throw err
        }
    })
})

app.get("/user/:id", verifiedAdmin, (req, res) => {

    User.findById(req.params.id).then((user) => {
        if(user){
            res.json(user)
        }else {
            res.send("Invalid ID")
        }
    }).catch((err) => {
        if(err){
            throw err
        }
    })

})

app.delete("/user/:id", verifiedAdmin, (req, res) => {

    User.findByIdAndRemove(req.params.id).then(() => {
        res.send("User with id provided has been deleted")
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
})

app.listen(5555, () => {
    console.log("Up and running! This is admin service for users databse...Please Use it resposibly");
    })