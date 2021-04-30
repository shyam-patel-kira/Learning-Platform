import mongoose from "mongoose";

const Schema = mongoose.Schema;

const writingTask2TestSchema = new Schema({
  test_id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  my_heading: {
    type: String,
    required: true,
  },
  question_heading: {
    type: String,
    required: true,
  },
});

const writingTaskTwoTestModel = mongoose.model(
  "ielts_writing_test_task_two",
  writingTask2TestSchema
);
export default writingTaskTwoTestModel;
