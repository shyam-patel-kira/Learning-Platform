import express from "express";
import cors from "cors";
import writingTaskTwoTestModel from "../Models/Writing_Task-2_test_questions.js";

import dotenv from "dotenv";
import _decodeJWT from "../decodeJWTFunction.js";
import _authorized from "../authorizationFunction.js";

dotenv.config();

const writingTaskTwoTestRouter = express.Router();
writingTaskTwoTestRouter.use(cors());

//API for posting Test Question
writingTaskTwoTestRouter.post(
  "/writing-task-2-test/:my_heading/:test_id",
  (req, res) => {
    const test_id = req.params.test_id;
    const my_heading = req.params.my_heading;
    const title = req.body.title;
    const question_heading = req.body.question_heading;

    const writingTaskTwoTestQuestion = new writingTaskTwoTestModel({
      test_id: test_id,
      my_heading: my_heading,
      title: title,
      question_heading: question_heading,
    });

    writingTaskTwoTestQuestion
      .save()
      .then((doc) => {
        res.status(201).json({
          message: "Test questions submitted successfully.",
          results: doc,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  }
);

//API for obtaining Test Question
writingTaskTwoTestRouter.get(
  "/writing-task-2-test/:test_id&:my_heading",
  (req, res) => {
    const decodedJWT = _decodeJWT(req);
    if (!_authorized(decodedJWT, "USER")) {
      console.log("Is not authorised");
      return res.json({ status: "Error", error: "Unauthorized user" });
    }

    writingTaskTwoTestModel
      .find({
        test_id: req.params.test_id,
        my_heading: req.params.my_heading,
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
  }
);


export default writingTaskTwoTestRouter