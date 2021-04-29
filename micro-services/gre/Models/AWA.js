const mongoose = require('mongoose');

mongoose.model("AWA", {
  sample_id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  my_heading: {
    type: String,
    required: true,
  },
  question_heading: {
    type: String,
    required: true,
  },
  paragraphs: {
    type: Object,
    required: true,
  },
});
