const mongoose = require('mongoose');

mongoose.model("Result_Quant", {
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
    max: 20,
  },
  incorrectAnswers: {
    type: Array,
    required: true,
  },
});
