const mongoose = require('mongoose');

mongoose.model("Quant", {
    //userName, First Name, Last Name, Age, Email, Location,
    test_id: {
      type: Number,
      required: true,
    },
    test_type: {
      type: String,
      required: true,
    },
    question_1: {
      type: String,
      required: true,
    },
    question_2: {
      type: String,
      required: true,
    },
    question_3: {
      type: String,
      required: true,
    },
    question_4: {
      type: String,
      required: true,
    },
    question_5: {
      type: String,
      required: true,
    },
    question_6: {
      type: String,
      required: true,
    },
    question_7: {
      type: String,
      required: true,
    },
    question_8: {
      type: String,
      required: true,
    },
    question_9: {
      type: String,
      required: true,
    },
    question_10: {
      type: String,
      required: true,
    },
});
