import express from "express";
import cors from "cors";
import listeningModel from "../Models/Listening.js";
import userListeningAnswersModel from "../Models/Listening_user_answers.js"

import dotenv from "dotenv";
import jwa from "jwa";
import jwt from "jsonwebtoken";
import Inversoft from "passport-node-client";
import _decodeJWT from "../decodeJWTFunction.js"
import _authorized from "../authorizationFunction.js"
// import jwt_decode from "jwt-decode";

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const listeningRouter = express.Router();
listeningRouter.use(cors());

//Obtain listening test paper
listeningRouter.get("/listening/test/:test_id", (req, res) => {
  const decodedJWT = _decodeJWT(req);
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }

  listeningModel
    .find({ test_id: req.params.test_id })
    .then((doc) => {
      res.status(201).json({
        message: "Test obtained successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

//Questions added for listening
listeningRouter.post("/listening/test/:test_id", (req, res) => {
  const test_id = req.params.test_id;
  const questions = req.body.questions;
  const listeningQuestions = new listeningModel({
    test_id: test_id,
    questions: questions,
  });
  listeningQuestions
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "Questions posted successfully.",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

//User-Answers of listening
listeningRouter.post("/listening/test/user-answers/:test_id", (req, res) => {
  const test_id = req.params.test_id;
  const answers = req.body.answers;
  
  const decodedJWT = _decodeJWT(req);
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }
  const userName = decodedJWT.userName;

  const userAnswers = new userListeningAnswersModel({
    test_id: test_id,
    answers: answers,
    userName: userName
  });
  userAnswers
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "Test submitted successfully.",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

export default listeningRouter;
