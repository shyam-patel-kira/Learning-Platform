const mongoose = require('mongoose');

mongoose.model("GRE_User_Verbal_Answer", {
    test_id: {
        type: Number,
        require: true,
    },
    test_type: {
        type: String,
        require: true,
    },
    userName: {
      type: String,
      require: true,
    },
    answers: {
        type: Object,
        require: true,
    },
});
