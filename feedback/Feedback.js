const mongoose = require(mongoose);

// A model for mongoose

// Validation for email
// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

mongoose.model("FeedBack", {
    //Title/Subject, author/username, content, email
    subject: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }

})