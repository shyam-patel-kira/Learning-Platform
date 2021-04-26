import express from "express";
import readingAnswerKeyModel from "./Models/Reading_answerkey.js";
import userReadingAnswersModel from "./Models/Reading_user_answers.js";
import resultModel from "./Models/Result.js";
import dotenv from "dotenv";
import jwa from "jwa";
import jwt from "jsonwebtoken";
import Inversoft from "passport-node-client";
import _decodeJWT from "./decodeJWTFunction.js"
import _authorized from "./authorizationFunction.js"

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const resultRouter = express.Router();

function calculate_result(correct, bands) {
  if (correct > 38) {
    bands = 9;
  } else if (correct > 36 && correct < 39) {
    bands = 8.5;
  } else if (correct > 34 && correct < 37) {
    bands = 8;
  } else if (correct > 32 && correct < 35) {
    bands = 7.5;
  } else if (correct > 29 && correct < 33) {
    bands = 7;
  } else if (correct > 26 && correct < 30) {
    bands = 6.5;
  } else if (correct > 22 && correct < 27) {
    bands = 6;
  } else if (correct > 18 && correct < 23) {
    bands = 5.5;
  } else if (correct > 14 && correct < 19) {
    bands = 5;
  } else if (correct > 12 && correct < 15) {
    bands = 4.5;
  } else if (correct > 9 && correct < 13) {
    bands = 4;
  } else if (correct > 7 && correct < 10) {
    bands = 3.5;
  } else if (correct > 5 && correct < 8) {
    bands = 3;
  } else if (correct > 3 && correct < 6) {
    bands = 2.5;
  } else {
    bands = 0;
  }
  return bands;
}

//API for storing result in results collection
resultRouter.get("/reading-answer-result/test/:test_id", (req, res) => {
  let answer_test;
  const test_type = "Reading";
  const test_id = req.params.test_id;
  var correct = 0,
    incorrect = 0,
    bands = 0;
  var incorrectAnswers = [];

  const decodedJWT = _decodeJWT(req);
  console.log(decodedJWT)
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }
  const userName = decodedJWT.userName;
  console.log("Authorization passed");
  readingAnswerKeyModel
    .find({
      test_id: req.params.test_id,
    })
    .then((doc) => {
      answer_test = doc[0].answers;
      answer_test = Object.keys(answer_test).map((key) => [
        Number(key),
        answer_test[key],
      ]);
    console.log("Our Answer ket obtained");
      let user_answer;
      userReadingAnswersModel
        .find({
          userName: userName,
          test_id: req.params.test_id,
        }).sort({_id:-1})//.limit(1)
        .then((ans) => {
          user_answer = ans[0].answers;
          user_answer = Object.keys(user_answer).map((key) => [
            Number(key),
            user_answer[key],
          ]);
    console.log(ans);
    console.log("User Answer key obtained");
          var i, a, b;
          for (i = 0; i < 40; i++) {
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
          const finalbands = calculate_result(correct, bands);
          const incorrans = [...incorrectAnswers];
          //console.log(incorrans)
          console.log(cor);
          console.log(incor);
          console.log(finalbands);
          console.log(incorrans);
          const finalResult = new resultModel({
            userName: userName,
            test_id: test_id,
            correct: cor,
            incorrect: incor,
            bands: finalbands,
            test_type: test_type,
            incorrectAnswers: incorrans,
          });
          correct = 0;
          incorrect = 0;
          bands = 0;
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
resultRouter.get("/reading-result-display/test/:test_id", (req, res) => {
  const decodedJWT = _decodeJWT(req);
  console.log(decodedJWT)
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }
  const userName = decodedJWT.userName
  resultModel
    .find({
      userName: userName,
      test_id: req.params.test_id,
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

resultRouter.get("/reading-result/display-all", (req, res) => {
  const decodedJWT = _decodeJWT(req);
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }
  const userName = decodedJWT.userName
  resultModel
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

export default resultRouter;

//When submit button is clicked below API's will be called
//API Calls for result
//1. axios.post('/ielts/reading/test/1') File:reading.js
//2. axios.get('ielts/reading-answers/test1') File:reading_answer_key.js
//3. axios.get('/ielts/reading-answer-result/test/1') File Result.js
//4. axios.get('ielts/reading-result-display/test/1') File Result.js
//5. log History from middleware
