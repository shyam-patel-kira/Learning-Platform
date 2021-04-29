const mongoose = require('mongoose');

mongoose.model("Quant_AnswerKey", {
    test_id: {
        type: Number,
        require: true,
        unique: true,
    },
    answers: {
        type: Object,
        require: true,
    },
});
