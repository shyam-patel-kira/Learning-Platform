const express = require("express" );

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwa = require("jwa");
const jwt = require("jsonwebtoken");
const Inversoft = require("passport-node-client");

const _decodeJWTAdmin = require("../decodeJWTFunctionAdmin.js");
const _authorizedAdmin = require("../authorizationFunctionAdmin.js");
// const jwt_decode = require( "jwt-decode";

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const verbalAnswerRouter = express.Router();
require("../Models/Verbal_AnswerKey.js");
const Verbal_Answers = mongoose.model("Verbal_AnswerKey");

verbalAnswerRouter.get("/verbal-answers/test/:test_type&:test_id", (req, res) => {
  const decodedJWT = _decodeJWTAdmin(req);
  console.log(decodedJWT);
  if (!_authorizedAdmin(decodedJWT, "ADMIN")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized API call" });
  }

  Verbal_Answers
    .find({
      test_id: req.params.test_id,
      test_type: req.params.test_type
    })
    .then((doc) => {
      res.status(201).json({
        message: "Test answers obtained successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

verbalAnswerRouter.post("/verbal-answers/test/:test_type&:test_id", (req, res) => {
  const test_id = req.params.test_id;
  const test_type = req.params.test_type;
  const answers = req.body.answers;
  const decodedJWT = _decodeJWTAdmin(req);
  console.log(decodedJWT);
  if (!_authorizedAdmin(decodedJWT, "ADMIN")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized API call" });
  }

  const verbalAnswerKey = new Verbal_Answers({
    test_id: test_id,
    test_type: test_type,
    answers: answers,
  });

  verbalAnswerKey
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "Test answers submitted successfully.",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = verbalAnswerRouter;
