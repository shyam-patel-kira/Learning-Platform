const mongoose = require('mongoose');

mongoose.model("User", {
    //userName, First Name, Last Name, Age, Email, Location, 
    userName: {
        type: String,
        require: true,
        unique: true,
        min: 3,
        max: 255
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    age: {
        type: Number,
        require: false
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    location: {
        type: String,
        require: false
    },
    roles: {
        type: String,
        require: false
    }

});
