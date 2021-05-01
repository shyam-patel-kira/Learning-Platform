import mongoose from "mongoose";
const Schema = mongoose.Schema;

const writingTaskOneUserAnswersSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  test_id: {
    type: Number,
    required: true,
  },
  test_type: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const writingTaskOneUserAnswerModel = mongoose.model(
  "writing_task_one_user_answer",
  writingTaskOneUserAnswersSchema
);
export default writingTaskOneUserAnswerModel;
