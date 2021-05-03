const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwa = require("jwa");
const jwt = require("jsonwebtoken");
const Inversoft = require("passport-node-client");

const _decodeJWT = require("../decodeJWTFunction.js");
const _authorized = require("../authorizationFunction.js");

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const todoRouter = express.Router();
require("../Models/Todo.js");
const Todo = mongoose.model("Todo");

// get todo route
todoRouter.get('/todoslist', (req, res) => {
    // verify
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
    let newTodo = new Todo({
        title: req.body.title,
        isCompleted: false,
        author: decodedJWT.Id
    });

    newTodo.save(error => {
        if (error) return console.log(error);
        return res.status(200).json({
            title: "successfully added",
            todo: newTodo
        })
    })
});

todoRouter.put('/todo/:todoId', (req, res) => {
    const decodedJWT = _decodeJWT(req);
    if (!_authorized(decodedJWT, "USER")) {
        console.log("Is not authorised");
        return res.json({
            status: "Error",
            error: "Unauthorized user"
        });
    }
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