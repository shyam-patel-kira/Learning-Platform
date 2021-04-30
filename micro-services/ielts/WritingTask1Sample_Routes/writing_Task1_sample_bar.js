import express from "express";
import cors from "cors";
import writingTaskOneSampleModel from "../Models/Writing_Task-1_sample_bar.js";

import dotenv from "dotenv";

dotenv.config();

const writingTaskOneSampleRouter = express.Router();
writingTaskOneSampleRouter.use(cors());

writingTaskOneSampleRouter.get(
  "/writing-task-1-sample/:sample_id&:my_heading",
  (req, res) => {
    writingTaskOneSampleModel
      .find({
        sample_id: req.params.sample_id,
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

writingTaskOneSampleRouter.post(
  "/writing-task-1-sample/:my_heading/:sample_id",
  (req, res) => {
    const sample_id = req.params.sample_id;
    const my_heading = req.params.my_heading;
    const title = req.body.title;
    const img_url = req.body.img_url;
    const question_heading = req.body.question_heading;
    const para1 = req.body.para1;
    const para2 = req.body.para2;
    const para3 = req.body.para3;
    const para4 = req.body.para4;

    const writingTaskOneSample = new writingTaskOneSampleModel({
      sample_id: sample_id,
      title: title,
      img_url: img_url,
      question_heading: question_heading,
      my_heading: my_heading,
      para1: para1,
      para2: para2,
      para3: para3,
      para4: para4,
    });
    writingTaskOneSample
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
  }
);

export default writingTaskOneSampleRouter;
