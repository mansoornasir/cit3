// VALIDATION
const Joi = require("joi");

function userSchema(data) {
    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .max(10)
            .required(),
        id: Joi.number()
            .integer()
            .min(1)
            .max(50),
        password: Joi.string()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string()
            .required()
            .email(),
        address: Joi.string().min(5).max(100)
    })
    
    const valid = schema.validate(data)
    return valid;
}

function profileSchema(data) {
    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .max(10)
            .required(),
        id: Joi.number()
            .integer()
            .min(1)
            .max(50),
        password: Joi.string()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string()
            .required()
            .email(),
        address: Joi.string().min(5).max(100)
    })
    
    const valid = schema.validate(data)
    return valid;
}

module.exports.userSchema = userSchema;
module.exports.profileSchema = profileSchema;