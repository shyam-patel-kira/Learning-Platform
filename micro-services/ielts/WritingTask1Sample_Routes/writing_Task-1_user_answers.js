import express from "express";
import cors from "cors";
import writingTaskOneUserAnswerModel from "../Models/Writing_Task-1_user_answers.js";

import dotenv from "dotenv";
import _decodeJWT from "../decodeJWTFunction.js";
import _authorized from "../authorizationFunction.js";

dotenv.config();

const writingTaskOneUserAnswerRouter = express.Router();
writingTaskOneUserAnswerRouter.use(cors());

//API for posting User Answers Question
writingTaskOneUserAnswerRouter.post(
  "/writing-task-1-user-answer/:test_type/:test_id",
  (req, res) => {
    const test_id = req.params.test_id;
    const test_type = req.params.test_type;
    const decodedJWT = _decodeJWT(req);
    console.log(decodedJWT);
    if (!_authorized(decodedJWT, "USER")) {
      console.log("Is not authorised");
      return res.json({ status: "Error", error: "Unauthorized user" });
    }
    const userName = decodedJWT.userName;
    const answer = req.body.answer;

    const writingTaskOneTestAnswer = new writingTaskOneUserAnswerModel({
      test_id: test_id,
      test_type: test_type,
      userName: userName,
      answer:answer
    });

    writingTaskOneTestAnswer
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
  }
);

export default writingTaskOneUserAnswerRouter;
