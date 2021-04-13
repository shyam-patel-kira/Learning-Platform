import mongoose from "mongoose";
const Schema = mongoose.Schema;

const listeningAnswerKeySchema = new Schema({
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

const listeningAnswerKeyModel = mongoose.model(
  "ielts_listening_answer_key",
  listeningAnswerKeySchema
);
export default listeningAnswerKeyModel;
