const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const redis = require('redis');

const _decodeJWT = require("../decodeJWTFunction.js");
const _authorized = require("../authorizationFunction.js");

dotenv.config();

// loading Redis
const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);

const todoRouter = express.Router();
require("../Models/Todo.js");
const Todo = mongoose.model("Todo");


// Cache middleware
function cache(req, res, next) {
      
    client.get("todos", (err, data) => {
        console.log("In cache ");
        const todos = JSON.parse(data);
        if (err) throw err;
        // console.log(todos);
        if (data !== null) {
        return res.status(200).json({
            title: 'success',
            todos: todos,
        });
      } else {
        next();
      }
    });
  }
  

// get todo route
todoRouter.get('/todoslist', cache, (req, res) => {
    // verify
    console.log("In GET todoslist");
    const decodedJWT = _decodeJWT(req);
    if (!_authorized(decodedJWT, "USER")) {
        console.log("Is not authorised");
        return res.json({
            status: "Error",
            error: "Unauthorized user"
        });
    }
    // now we know token is valid
    Todo.find({
        author: decodedJWT.id
    }, (err, todos) => {
        if (err) return console.log(err);
        // Set data to Redis
        // const todo = {"todos" : todos};
        
        client.setex("todos", 3600, JSON.stringify(todos));
        return res.status(200).json({
            title: 'success',
            todos: todos
        });
    })

})

// add todo route
// mark todo as completed route
todoRouter.post('/todoslist', (req, res) => {
    // verify
    const decodedJWT = _decodeJWT(req);
    if (!_authorized(decodedJWT, "USER")) {
        console.log("Is not authorised");
        return res.json({
            status: "Error",
            error: "Unauthorized user"
        });
    }
    client.del("todos")
    console.log(decodedJWT.id);
    let newTodo = new Todo({
        title: req.body.title,
        isCompleted: false,
        author: decodedJWT.id,
    });

    newTodo.save(error => {
        if (error) return console.log(error);
        return res.status(200).json({
            title: "successfully added",
            todo: newTodo
        })
    })
});

// for updating todo
todoRouter.delete('/todoslist/delete', (req, res) => {
    console.log("In PUT todoslist");
    const decodedJWT = _decodeJWT(req);
    if (!_authorized(decodedJWT, "USER")) {
        console.log("Is not authorised");
        return res.json({
            status: "Error",
            error: "Unauthorized user"
        });
    }
    // now we know token is valid
    Todo.deleteMany({
        isCompleted: true
    }, (err, todo) => {
        if (err) return console.log(err);
        else {
            return res.status(200).json({
            title: 'dELELTED'
            });
        }
    })
});

todoRouter.put('/todoslist/:todoId', (req, res) => {
    console.log("In PUT todoslist");
    const decodedJWT = _decodeJWT(req);
    if (!_authorized(decodedJWT, "USER")) {
        console.log("Is not authorised");
        return res.json({
            status: "Error",
            error: "Unauthorized user"
        });
    }
    client.del("todos");
    // now we know token is valid
    Todo.findOne({
        author: decodedJWT.id,
        _id: req.params.todoId
    }, (err, todo) => {
        if (err) return console.log(err);

        todo.isCompleted = true;
        todo.save(error => {
            if (error) return console.log(error);

            //saved
            return res.status(200).json({
                title: 'success',
                todo: todo
            });
        });
    })
});


module.exports = todoRouter;