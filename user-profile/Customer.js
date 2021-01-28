const mongoose = require('mongoose');

mongoose.model("Customer", {
    //First Name, Last Name, Age, Email, Location, 
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: false
    },
    email: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: false
    }

});
