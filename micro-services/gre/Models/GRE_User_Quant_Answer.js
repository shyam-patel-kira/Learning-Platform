const mongoose = require('mongoose');

mongoose.model("GRE_User_Quant_Answer", {
    test_id: {
        type: Number,
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
