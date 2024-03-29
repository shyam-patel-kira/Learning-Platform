const express = require("express" );
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwa = require("jwa");
const jwt = require("jsonwebtoken");
const Inversoft = require("passport-node-client");

const _decodeJWT = require("../decodeJWTFunction.js");
const _authorized = require("../authorizationFunction.js");
// const jwt_decode = require( "jwt-decode" );

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const verbalResultRouter = express.Router();

require("../Models/Verbal_AnswerKey.js");
const Verbal_AnswerKey = mongoose.model("Verbal_AnswerKey");
require("../Models/GRE_User_Verbal_Answer.js")
const GRE_User_Verbal_Answer = mongoose.model("GRE_User_Verbal_Answer");
require("../Models/Result_Verbal.js")
const Result_Verbal = mongoose.model("Result_Verbal");

//API for storing result in results collection
verbalResultRouter.get("/verbal-answer-result/test/:test_type&:test_id", (req, res) => {
  let answer_test;
  const test_type = req.params.test_type;
  const test_id = req.params.test_id;
  var correct = 0,
    incorrect = 0;
  var incorrectAnswers = [];

  const decodedJWT = _decodeJWT(req);
  console.log(decodedJWT)
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }
  const userName = decodedJWT.userName;
  console.log("Authorization passed");
  Verbal_AnswerKey
    .find({
      test_id: req.params.test_id,
      test_type: req.params.test_type,
    })
    .then((doc) => {
      answer_test = doc[0].answers;
      answer_test = Object.keys(answer_test).map((key) => [
        Number(key),
        answer_test[key],
      ]);
    console.log("Our Answer key obtained");
      let user_answer;
      GRE_User_Verbal_Answer
        .find({
          userName: userName,
          test_id: req.params.test_id,
          test_type: req.params.test_type,
        }).sort({_id:-1}).limit(1)
        .then((ans) => {
          console.log(ans);
          user_answer = ans[0].answers;
          user_answer = Object.keys(user_answer).map((key) => [
            Number(key),
            user_answer[key],
          ]);
    console.log(ans);
    console.log("User Answer key obtained");
          var i, a, b;
          for (i = 0; i < 7; i++) {
            a = user_answer[i][1];
            b = answer_test[i][1];
            if (a.toUpperCase() === b.toUpperCase()) {
              correct += 1;
            } else {
              incorrect += 1;
              incorrectAnswers.push(i + 1);
            }
          }

          const cor = correct;
          const incor = incorrect;
          const incorrans = [...incorrectAnswers];
          //console.log(incorrans)
          console.log(cor);
          console.log(incor);
          console.log(incorrans);
          const score = cor;
          const finalResult = new Result_Verbal({
            userName: userName,
            test_id: test_id,
            incorrect: incor,
            score: score,
            test_type: test_type,
            incorrectAnswers: incorrans,
          });
          correct = 0;
          incorrect = 0;
          incorrectAnswers = [];
          console.log("Finalk point");
          finalResult
            .save()
            .then((doc) => {
              res.status(201).json({
                message: "Result stored successfully.",
                results: doc,
              });
            })
            .catch((err) => {
              res.json(err);
            });
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
});

//API's for displaying result
verbalResultRouter.get("/verbal-result-display/test/:test_type&:test_id", (req, res) => {
  const decodedJWT = _decodeJWT(req);
  console.log(decodedJWT)
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }
  const userName = decodedJWT.userName
  Result_Verbal
    .find({
      userName: userName,
      test_id: req.params.test_id,
      test_type: req.params.test_type,
    }).sort({_id:-1}).limit(1)
    .then((doc) => {
      res.status(201).json({
        message: "Result displayed successfully",
        userName: userName,
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

verbalResultRouter.get("/verbal-result/display-all", (req, res) => {
  const decodedJWT = _decodeJWT(req);
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }
  const userName = decodedJWT.userName
  Result_Verbal
    .find({
      userName: userName,
    }) //User-ID left to be inserted
    .then((doc) => {
      res.status(201).json({
        message: "Result displayed successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = verbalResultRouter;

//When submit button is clicked below API's will be called
//API Calls for result
//1. axios.post('/ielts/reading/test/1') File:reading.js
//2. axios.get('ielts/reading-answers/test1') File:reading_answer_key.js
//3. axios.get('/ielts/reading-answer-result/test/1') File Result.js
//4. axios.get('ielts/reading-result-display/test/1') File Result.js
//5. log History from middleware
