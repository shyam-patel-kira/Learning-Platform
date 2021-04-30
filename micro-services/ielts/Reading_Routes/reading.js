import express from "express";

import readingModel from "../Models/Reading.js";
import userReadingAnswersModel from "../Models/Reading_user_answers.js";
import dotenv from "dotenv";
import _decodeJWT from "../decodeJWTFunction.js";
import _authorized from "../authorizationFunction.js";
// import jwt_decode from "jwt-decode";

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const readingRouter = express.Router();

//API for displaying question
readingRouter.get("/reading/test/:test_id", (req, res) => {
  const decodedJWT = _decodeJWT(req);
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }

  readingModel
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

//API for posting user answers
readingRouter.post("/reading/test/user-answers/:test_id", (req, res) => {
  const test_id = req.params.test_id;
  const answers = req.body.answers;

  const decodedJWT = _decodeJWT(req);
  console.log(decodedJWT);
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }
  const userName = decodedJWT.userName;
 
  const userAnswers = new userReadingAnswersModel({
    test_id: test_id,
    answers: answers,
    userName: userName,
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
  // console.log("Finished Here");
});

export default readingRouter;
