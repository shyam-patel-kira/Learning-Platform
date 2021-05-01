import mongoose from "mongoose";
const Schema = mongoose.Schema;

const writingTaskTwoUserAnswersSchema = new Schema({
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

const writingTaskTwoUserAnswerModel = mongoose.model(
  "writing_task_two_user_answer",
  writingTaskTwoUserAnswersSchema
);
export default writingTaskTwoUserAnswerModel;
