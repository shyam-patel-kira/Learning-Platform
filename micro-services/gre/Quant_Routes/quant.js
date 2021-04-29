const express = require("express" );

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwa = require("jwa");
const jwt = require("jsonwebtoken");
const Inversoft = require("passport-node-client");

const _decodeJWT = require("../decodeJWTFunction.js");
const _authorized = require("../authorizationFunction.js");
// const jwt_decode = require( "jwt-decode";

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const quantRouter = express.Router();
require("../Models/Quant.js");
const Quant = mongoose.model("Quant");
require("../Models/GRE_User_Quant_Answer.js")
const GRE_User_Quant_Answer = mongoose.model("GRE_User_Quant_Answer");

//API for displaying question
quantRouter.get("/quant/practice/:test_id", (req, res) => {
  // const decodedJWT = _decodeJWT(req);
  // if (!_authorized(decodedJWT, "USER")) {
  //   console.log("Is not authorised");
  //   return res.json({ status: "Error", error: "Unauthorized user" });
  // }

  Quant
    .find({
      test_id: req.params.test_id
     })
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

// API for posting
quantRouter.post("/quant/practice/:test_id", (req, res) => {
  const test_id = req.params.test_id;
  const question_1 = req.body.question_1;
  const question_2 = req.body.question_2;
  const question_3 = req.body.question_3;
  const question_4 = req.body.question_4;
  const question_5 = req.body.question_5;
  const question_6 = req.body.question_6;
  const question_7 = req.body.question_7;
  const question_8 = req.body.question_8;
  const question_9 = req.body.question_9;
  const question_10 = req.body.question_10;
  const question_11 = req.body.question_11;
  const question_12 = req.body.question_12;
  const question_13 = req.body.question_13;
  const question_14 = req.body.question_14;
  const question_15 = req.body.question_15;
  const question_16 = req.body.question_16;
  const question_17 = req.body.question_17;
  const question_18 = req.body.question_18;
  const question_19 = req.body.question_19;
  const question_20 = req.body.question_20;
  // const decodedJWT = _decodeJWT(req);
  // console.log(decodedJWT)
  // if (!_authorized(decodedJWT, "USER")) {
  //   console.log("Is not authorised");
  //   return res.json({ status: "Error", error: "Unauthorized user" });
  // }
  // const userName = decodedJWT.userName;
  //console.log("Start Here");
  const practice = new Quant({
    test_id : test_id,
    question_1 : question_1,
    question_2 : question_2,
    question_3 : question_3,
    question_4 : question_4,
    question_5 : question_5,
    question_6 : question_6,
    question_7 : question_7,
    question_8 : question_8,
    question_9 : question_9,
    question_10 : question_10,
    question_11 : question_11,
    question_12 : question_12,
    question_13 : question_13,
    question_14 : question_14,
    question_15 : question_15,
    question_16 : question_16,
    question_17 : question_17,
    question_18 : question_18,
    question_19 : question_19,
    question_20 : question_20
  });
  // console.log("answer :" + answers);
  // console.log("Here passed");
  practice
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "question saved successfully.",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
  // console.log("Finished Here");
});



//API for posting user answers
quantRouter.post("/quant/test/user-answers/:test_id", (req, res) => {
  const test_id = req.params.test_id;
  const answers = req.body.answers;

  const decodedJWT = _decodeJWT(req);
  console.log(decodedJWT)
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }
  const userName = decodedJWT.userName;
  //console.log("Start Here");
  const userAnswers = new GRE_User_Quant_Answer({
    test_id: test_id,
    answers: answers,
    userName: userName
  });
  // console.log("answer :" + answers);
  // console.log("Here passed");
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

module.exports = quantRouter;
