import express from "express";
import readingAnswerKeyModel from "../Models/Reading_answerkey.js";
import dotenv from "dotenv";
import jwa from "jwa";
import jwt from "jsonwebtoken";
import Inversoft from "passport-node-client";
import _decodeJWTAdmin from "../decodeJWTFunctionAdmin.js"
import _authorizedAdmin from "../authorizationFunctionAdmin.js"

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const readingAnswerRouter = express.Router();

readingAnswerRouter.get("/reading-answers/test/:test_id", (req, res) => {
  const decodedJWT = _decodeJWTAdmin(req);
  console.log(decodedJWT);
  if (!_authorizedAdmin(decodedJWT, "ADMIN")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized API call" });
  }
  readingAnswerKeyModel
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

export default readingAnswerRouter;
