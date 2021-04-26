import express from "express";
import listeningAnswerKeyModel from "../Models/Listening_answerkey.js";
import dotenv from "dotenv";
import jwa from "jwa";
import jwt from "jsonwebtoken";
import Inversoft from "passport-node-client";
import _decodeJWTAdmin from "../decodeJWTFunctionAdmin.js"
import _authorizedAdmin from "../authorizationFunctionAdmin.js"

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const listeningAnswerRouter = express.Router();

listeningAnswerRouter.get("/listening-answers/test/:test_id", (req, res) => {
  const decodedJWT = _decodeJWTAdmin(req);
  console.log(decodedJWT);
  if (!_authorizedAdmin(decodedJWT, "ADMIN")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized API call" });
  }

  listeningAnswerKeyModel
    .find({ test_id: req.params.test_id })
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

listeningAnswerRouter.post("/listening-answers/test/:test_id", (req, res) => {
  const decodedJWT = _decodeJWT(req);
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }

  const test_id = req.params.test_id;
  const answers = req.body.answers;

  const listeningAnswerKey = new listeningAnswerKeyModel({
    test_id: test_id,
    answers: answers,
  });

  listeningAnswerKey
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
});

export default listeningAnswerRouter;
