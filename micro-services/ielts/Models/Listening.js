import mongoose from "mongoose";

const Schema = mongoose.Schema;

const listeningSchema = new Schema({
  test_id: {
    type: Number,
    required: true,
    unique: true,
  },
  questions: {
    type: Object,
    required: true,
  }
});

const listeningModel = mongoose.model("ielts_listening", listeningSchema);
export default listeningModel;
