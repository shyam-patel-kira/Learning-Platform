import express from "express";
import resultModel from "./Models/Result.js";
import dotenv from "dotenv";
import _decodeJWT from "./decodeJWTFunction.js"
import _authorized from "./authorizationFunction.js"

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const resultVisualRouter = express.Router();

resultVisualRouter.get("/result-visual/:test_type", (req, res) => {
  const decodedJWT = _decodeJWT(req);
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }
  const userName = decodedJWT.userName;
  const test_type = req.params.test_type;
  resultModel
    .find({
      userName: userName,
      test_type: test_type,
    })
    .then((doc) => {
      res.status(201).json({
        message: "Graph Data obtained successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

export default resultVisualRouter;

