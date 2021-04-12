import mongoose from "mongoose";

const Schema = mongoose.Schema;

const speakingSchema = new Schema({
  test_id: {
    type: Number,
    required: true,
    unique: true,
  },
  detail: {
    type: String,
    required: true,
  },
  topic1: {
    type: String,
    required: true,
  },
  topic2: {
    type: String,
    required: true,
  },
  topic3: {
    type: String,
    required: true,
  },
  q1: {
    type: String,
    required: true,
  },
  q2: {
    type: String,
    required: true,
  },
  q3: {
    type: String,
    required: true,
  },
  q4: {
    type: String,
    required: true,
  },
  q5: {
    type: String,
    required: true,
  },
  q6: {
    type: String,
    required: true,
  },
  q7: {
    type: String,
    required: true,
  },
  q8: {
    type: String,
    required: true,
  },
  q9: {
    type: String,
    required: true,
  },
  q10: {
    type: String,
    required: true,
  },
  q11: {
    type: String,
    required: true,
  },
});

const speakingModel = mongoose.model("ielts_speaking", speakingSchema);
export default speakingModel;
