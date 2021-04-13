import mongoose from "mongoose";
const Schema = mongoose.Schema;

const readingAnswerKeySchema = new Schema({
  test_id: {
    type: Number,
    required: true,
    unique: true,
  },
  answers: {
    type: Object,
    required: true,
  },
});

const readingAnswerKeyModel = mongoose.model(
  "ielts_reading_answer_key",
  readingAnswerKeySchema
);
export default readingAnswerKeyModel;
