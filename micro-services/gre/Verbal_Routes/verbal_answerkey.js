const express = require("express" );

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

const verbalAnswerRouter = express.Router();
require("../Models/Verbal_AnswerKey.js");
const Verbal_Answers = mongoose.model("Verbal_AnswerKey");

verbalAnswerRouter.get("/verbal-answers/test/:test_type&:test_id", (req, res) => {
  verbalAnswerKeyModel
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
