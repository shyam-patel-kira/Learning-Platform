import mongoose from "mongoose";
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  test_id: {
    type: Number,
    required: true,
  },
  correct: {
    type: Number,
    required: true,
  },
  incorrect: {
    type: Number,
    required: true,
  },
  bands: {
    type: Number,
    required: true,
    min: 0,
    max: 9,
  },
  test_type: {
    type: String,
    required: true,
  },
  incorrectAnswers: {
    type: Array,
    required: true,
  },
});

const resultModel = mongoose.model("result", resultSchema);
export default resultModel;
