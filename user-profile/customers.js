// Load Express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://kira:kirash@user-profile-shard-00-00.bukub.mongodb.net:27017,user-profile-shard-00-01.bukub.mongodb.net:27017,user-profile-shard-00-02.bukub.mongodb.net:27017/User-profile?ssl=true&replicaSet=atlas-12anjn-shard-0&authSource=admin&retryWrites=true&w=majority", () => {
  console.log("Database connected to Customers' Service sucessfully!");
})

require("./Customer");
const Customer = mongoose.model("Customer");

    app.post("/customer", (req, res) => {
        console.log(req.body)
        
        
        var newCustomer = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            email: req.body.email,
            location: req.body.location
        }

        var customer = new Customer(newCustomer);

        customer.save().then(() => {
            res.send("Customer created")
        }).catch((err) => {
            if(err){
                throw err; 
            }
        })
    })

    app.get("/customers", (req, res) => {
        Customer.find().then((customers) => {
            res.json(customers)
        }).catch((err) => {
            if(err){
                throw err
            }
        })
    })

    app.get("/customer/:id", (req, res) => {

        Customer.findById(req.params.id).then((customer) => {
            if(customer){
                res.json(customer)
            }else {
                res.send("Invalid ID")
            }
        }).catch((err) => {
            if(err){
                throw err
            }
        })

    })

    app.delete("/customer/:id", (req, res) => {

        Customer.findByIdAndRemove(req.params.id).then(() => {
            res.send("Customer with id provided has been deleted")
        }).catch((err) => {
            if(err){
                throw err;
            }
        })
    })

// app.get('/', (req, res) => {
// res.send("This is out main EndPoint");
// }) 

app.listen(5545, () => {
console.log("Up and running! This is our customers service");
})