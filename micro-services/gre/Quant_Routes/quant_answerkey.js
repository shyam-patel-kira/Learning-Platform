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

const quantAnswerRouter = express.Router();
require("../Models/Quant_AnswerKey.js");
const Quant_Answers = mongoose.model("Quant_AnswerKey");

// API for fetching our Answer Key
quantAnswerRouter.get("/quant-answers/test/:test_id", (req, res) => {
  const decodedJWT = _decodeJWTAdmin(req);
  console.log(decodedJWT);
  if (!_authorizedAdmin(decodedJWT, "ADMIN")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized API call" });
  }

  Quant_Answers
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

// API for posting
quantAnswerRouter.post("/quant-answers/test/:test_id", (req, res) => {

  const decodedJWT = _decodeJWTAdmin(req);
  console.log(decodedJWT);
  if (!_authorizedAdmin(decodedJWT, "ADMIN")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized API call" });
  }

  const test_id = req.params.test_id;
  const test_type = req.params.test_type;
  const answers = req.body.answers;
  const quantAnswerKey = new Quant_Answers({
    test_id: test_id,
    test_type: test_type,
    answers: answers,
  });

  quantAnswerKey
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

module.exports = quantAnswerRouter;
