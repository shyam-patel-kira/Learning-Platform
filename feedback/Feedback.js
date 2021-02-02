const mongoose = require('mongoose');

// A model for mongoose

mongoose.model("Feedback", {
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
        require: true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    }

});
