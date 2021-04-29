const mongoose = require('mongoose');

mongoose.model("Result_Verbal", {
  userName: {
    type: String,
    required: true,
  },
  test_id: {
    type: Number,
    required: true,
  },
  incorrect: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    min: 0,
    max: 7,
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
