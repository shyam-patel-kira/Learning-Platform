import express from "express";
import cors from "cors";
import writingTaskOneTestModel from "../Models/Writing_Task-1_test_questions.js";

import dotenv from "dotenv";
import _decodeJWT from "../decodeJWTFunction.js";
import _authorized from "../authorizationFunction.js";

dotenv.config();

const writingTaskOneTestRouter = express.Router();
writingTaskOneTestRouter.use(cors());

//API for posting Test Question
writingTaskOneTestRouter.post(
  "/writing-task-1-test/:my_heading/:test_id",
  (req, res) => {
    const test_id = req.params.test_id;
    const my_heading = req.params.my_heading;
    const title = req.body.title;
    const img_url = req.body.img_url;
    const question_heading = req.body.question_heading;

    const writingTaskOneTestQuestion = new writingTaskOneTestModel({
      test_id: test_id,
      my_heading: my_heading,
      title: title,
      img_url: img_url,
      question_heading: question_heading,
    });

    writingTaskOneTestQuestion
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
writingTaskOneTestRouter.get(
  "/writing-task-1-test/:test_id&:my_heading",
  (req, res) => {
    const decodedJWT = _decodeJWT(req);
    if (!_authorized(decodedJWT, "USER")) {
      console.log("Is not authorised");
      return res.json({ status: "Error", error: "Unauthorized user" });
    }

    writingTaskOneTestModel
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

export default writingTaskOneTestRouter;
