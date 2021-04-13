import express from "express";
import listeningAnswerKeyModel from "../Models/Listening_answerkey.js";

const listeningAnswerRouter = express.Router();

listeningAnswerRouter.get("/listening-answers/test/:test_id", (req, res) => {
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
