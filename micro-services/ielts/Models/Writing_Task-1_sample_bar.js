import mongoose from "mongoose";

const Schema = mongoose.Schema;

const writingTask1SampleSchema = new Schema({
  sample_id: {
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
  para1: {
    type: String,
    required: true,
  },
  para2: {
    type: String,
    required: true,
  },
  para3: {
    type: String,
    required: true,
  },
  para4: {
    type: String,
    required: true,
  },
});

const writingTaskOneSampleModel = mongoose.model(
  "ielts_writing_sample_task_one",
  writingTask1SampleSchema
);
export default writingTaskOneSampleModel;
