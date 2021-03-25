// VALIDATION
const Joi = require('@hapi/joi');

const registerValidation = data => {
    const schema = {
        userName: Joi.string()
                .min(3)
                .required()
                .max(255),
        email: Joi.string()
                .min(6)
                .required()
                .email(),
        password: Joi.string()
                .min(6)
                .required()                                                 
    }
    const { error } = Joi.valid( data, schema)
};

    
const loginValidation = data => {
        const schema = {
            userName: Joi.string()
                    .min(3)
                    .required()
                    .max(255),
            // ambiguity HERE
            // TODO: while login validate by either userName or email                    
            // email: Joi.string()
            //         .min(6)
            //         .required()
            //         .email(),
            password: Joi.string()
                    .min(6)
                    .required()                                                 
        };
        const { error } = Joi.valid(data, schema)    
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

