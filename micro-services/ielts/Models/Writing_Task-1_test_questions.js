import mongoose from "mongoose";

const Schema = mongoose.Schema;

const writingTask1TestSchema = new Schema({
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
  img_url: {
    type: Object,
    required: true,
  },
});

const writingTaskOneTestModel = mongoose.model(
  "ielts_writing_test_task_one",
  writingTask1TestSchema
);
export default writingTaskOneTestModel;
