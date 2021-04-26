import express from "express";
import cors from "cors";
import speakingModel from "../Models/Speaking.js";

import dotenv from "dotenv";
import jwa from "jwa";
import jwt from "jsonwebtoken";
import Inversoft from "passport-node-client";
// import jwt_decode from "jwt-decode";
import _decodeJWT from "../decodeJWTFunction.js"
import _authorized from "../authorizationFunction.js"

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const speakingRouter = express.Router();
speakingRouter.use(cors());

speakingRouter.get("/speaking/test/:test_id", (req, res) => {
  const decodedJWT = _decodeJWT(req);
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }

  speakingModel
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

speakingRouter.post("/speaking/test/:test_id", (req, res) => {
  const test_id = req.params.test_id;
  const detail = req.body.detail;
  const topic1 = req.body.topic1;
  const topic2 = req.body.topic2;
  const topic3 = req.body.topic3;
  const q1 = req.body.q1;
  const q2 = req.body.q2;
  const q3 = req.body.q3;
  const q4 = req.body.q4;
  const q5 = req.body.q5;
  const q6 = req.body.q6;
  const q7 = req.body.q7;
  const q8 = req.body.q8;
  const q9 = req.body.q9;
  const q10 = req.body.q10;
  const q11 = req.body.q11;

  const speakingQuestions = new speakingModel({
    test_id: test_id,
    detail: detail,
    topic1: topic1,
    topic2: topic2,
    topic3: topic3,
    q1: q1,
    q2: q2,
    q3: q3,
    q4: q4,
    q5: q5,
    q6: q6,
    q7: q7,
    q8: q8,
    q9: q9,
    q10: q10,
    q11: q11,
  });
  speakingQuestions
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "Questions obtained successfully.",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});


export default speakingRouter;
