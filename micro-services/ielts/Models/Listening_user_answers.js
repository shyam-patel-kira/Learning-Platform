import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userListeningAnswersSchema = new Schema({
  test_id: {
    type: Number,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  answers: {
    type: Object,
    required: true,
  },
});

const userListeningAnswersModel = mongoose.model(
  "ielts_listening_user_answer",
  userListeningAnswersSchema
);
export default userListeningAnswersModel;
