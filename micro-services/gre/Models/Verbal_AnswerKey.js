const mongoose = require('mongoose');

mongoose.model("Verbal_AnswerKey", {
    //userName, First Name, Last Name, Age, Email, Location,
    test_id: {
        type: Number,
        require: true,
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
