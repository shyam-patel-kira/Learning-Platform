const mongoose = require('mongoose');

mongoose.model("Verbal", {
    //userName, First Name, Last Name, Age, Email, Location,
    test_id: {
      type: Number,
      required: true,
    },
    test_type: {
      type: String,
      required: true,
    },
    passage_1: {
      type: String,
      required: true,
    },
    passage_2: {
      type: String,
      required: true,
    },
    passage_3: {
      type: String,
      required: true,
    },
    passage_4: {
      type: String,
      required: true,
    },
    passage_5: {
      type: String,
      required: true,
    },
    passage_6: {
      type: String,
      required: true,
    },
    passage_7: {
      type: String,
      required: true,
    },
});
