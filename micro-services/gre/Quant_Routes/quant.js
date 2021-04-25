const express = require("express" );

//const userReadingAnswersModel = require( "../Models/Reading_user_answers.js";
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwa = require("jwa");
const jwt = require("jsonwebtoken");
const Inversoft = require("passport-node-client");

// const _decodeJWT = require("../decodeJWTFunction.js");
// const _authorized = require("../authorizationFunction.js");
// const jwt_decode = require( "jwt-decode";

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const quantRouter = express.Router();
require("../Models/Quant.js");
const Quant = mongoose.model("Quant");
//API for displaying question
quantRouter.get("/quant/practice/:test_type&:test_id", (req, res) => {
  // const decodedJWT = _decodeJWT(req);
  // if (!_authorized(decodedJWT, "USER")) {
  //   console.log("Is not authorised");
  //   return res.json({ status: "Error", error: "Unauthorized user" });
  // }

  Quant
    .find({
      test_id: req.params.test_id,
      test_type: req.params.test_type
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
quantRouter.post("/quant/practice/:test_type&:test_id", (req, res) => {
  const test_id = req.params.test_id;
  const test_type = req.params.test_type;
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
    test_type : test_type,
    question_1 : question_1,
    question_2 : question_2,
    question_3 : question_3,
    question_4 : question_4,
    question_5 : question_5,
    question_6 : question_6,
    question_7 : question_7,
    question_8 : question_8,
    question_9 : question_9,
    question_10 : question_10
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
// readingRouter.post("/reading/test/user-answers/:test_id", (req, res) => {
//   const test_id = req.params.test_id;
//   const answers = req.body.answers;
//
//   const decodedJWT = _decodeJWT(req);
//   console.log(decodedJWT)
//   if (!_authorized(decodedJWT, "USER")) {
//     console.log("Is not authorised");
//     return res.json({ status: "Error", error: "Unauthorized user" });
//   }
//   const userName = decodedJWT.userName;
//   //console.log("Start Here");
//   const userAnswers = new userReadingAnswersModel({
//     test_id: test_id,
//     answers: answers,
//     userName: userName
//   });
//   // console.log("answer :" + answers);
//   // console.log("Here passed");
//   userAnswers
//     .save()
//     .then((doc) => {
//       res.status(201).json({
//         message: "Test submitted successfully.",
//         results: doc,
//       });
//     })
//     .catch((err) => {
//       res.json(err);
//     });
//   // console.log("Finished Here");
// });


module.exports = quantRouter;
