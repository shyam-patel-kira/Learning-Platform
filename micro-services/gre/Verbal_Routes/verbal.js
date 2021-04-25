const express = require("express" );

// const Verbal_SE = require("../Models/Verbal.js");
// const Verbal_TC = require("../Models/Verbal.js");
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

const verbalRouter = express.Router();
require("../Models/Verbal.js");
const Verbal = mongoose.model("Verbal");
//API for displaying question
verbalRouter.get("/verbal/practice/:test_type&:test_id", (req, res) => {
  // const decodedJWT = _decodeJWT(req);
  // if (!_authorized(decodedJWT, "USER")) {
  //   console.log("Is not authorised");
  //   return res.json({ status: "Error", error: "Unauthorized user" });
  // }

  Verbal
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
verbalRouter.post("/verbal/practice/:test_type&:test_id", (req, res) => {
  const test_id = req.params.test_id;
  const test_type = req.params.test_type;
  const passage_1 = req.body.passage_1;
  const passage_2 = req.body.passage_2;
  const passage_3 = req.body.passage_3;
  const passage_4 = req.body.passage_4;
  const passage_5 = req.body.passage_5;
  const passage_6 = req.body.passage_6;
  const passage_7 = req.body.passage_7;
  // const decodedJWT = _decodeJWT(req);
  // console.log(decodedJWT)
  // if (!_authorized(decodedJWT, "USER")) {
  //   console.log("Is not authorised");
  //   return res.json({ status: "Error", error: "Unauthorized user" });
  // }
  // const userName = decodedJWT.userName;
  //console.log("Start Here");
  const practice = new Verbal({
    test_id : test_id,
    test_type : test_type,
    passage_1 : passage_1,
    passage_2 : passage_2,
    passage_3 : passage_3,
    passage_4 : passage_4,
    passage_5 : passage_5,
    passage_6 : passage_6,
    passage_7 : passage_7
  });
  // console.log("answer :" + answers);
  // console.log("Here passed");
  practice
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "passage saved successfully.",
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


module.exports = verbalRouter;
