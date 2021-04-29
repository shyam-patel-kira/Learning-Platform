const mongoose = require('mongoose');

mongoose.model("Verbal_AnswerKey", {
    test_id: {
        type: Number,
        require: true,
        unique: true,
    },
    test_type: {
        type: String,
        require: true,
    },
    answers: {
        type: Object,
        require: true,
    },
});
