const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const _decodeJWT = require("../decodeJWTFunction.js");
const _authorized = require("../authorizationFunction.js");
// const jwt_decode = require( "jwt-decode" );

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const quantResultRouter = express.Router();

require("../Models/Quant_AnswerKey.js");
const Quant_AnswerKey = mongoose.model("Quant_AnswerKey");
require("../Models/GRE_User_Quant_Answer.js");
const GRE_User_Quant_Answer = mongoose.model("GRE_User_Quant_Answer");
require("../Models/Result_Quant.js");
const Result_Quant = mongoose.model("Result_Quant");

//API for storing result in results collection
quantResultRouter.get("/quant-answer-result/test/:test_id", (req, res) => {
  let answer_test;
  const test_id = req.params.test_id;
  var correct = 0,
    incorrect = 0;
  var incorrectAnswers = [];

  const decodedJWT = _decodeJWT(req);
  console.log(decodedJWT);
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }
  const userName = decodedJWT.userName;
  console.log("Authorization passed");
  Quant_AnswerKey.find({
    test_id: req.params.test_id,
  })
    .then((doc) => {
      answer_test = doc[0].answers;
      answer_test = Object.keys(answer_test).map((key) => [
        Number(key),
        answer_test[key],
      ]);
      console.log("Our Answer key obtained");
      let user_answer;
      GRE_User_Quant_Answer.find({
        userName: userName,
        test_id: req.params.test_id,
      })
        .sort({ _id: -1 })
        .limit(1)
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
          for (i = 0; i < 20; i++) {
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
          const finalResult = new Result_Quant({
            userName: userName,
            test_id: test_id,
            incorrect: incor,
            score: score,
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
quantResultRouter.get("/quant-result-display/test/:test_id", (req, res) => {
  const decodedJWT = _decodeJWT(req);
  console.log(decodedJWT);
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }
  const userName = decodedJWT.userName;
  Result_Quant.find({
    userName: userName,
    test_id: req.params.test_id,
  })
    .sort({ _id: -1 })
    .limit(1)
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

quantResultRouter.get("/quant-result/display-all", (req, res) => {
  const decodedJWT = _decodeJWT(req);
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }
  const userName = decodedJWT.userName;
  Result_Quant.find({
    userName: userName,
  })
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

module.exports = quantResultRouter;

//When submit button is clicked below API's will be called
//API Calls for result
//1. axios.post('/ielts/reading/test/1') File:reading.js
//2. axios.get('ielts/reading-answers/test1') File:reading_answer_key.js
//3. axios.get('/ielts/reading-answer-result/test/1') File Result.js
//4. axios.get('ielts/reading-result-display/test/1') File Result.js
//5. log History from middleware
