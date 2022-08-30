const Joi = require('joi')

const userValidation = data => {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string().min(3).max(10).email().required(),
        password: Joi.required()
        })
    
    return schema.validate(data)
}

module.exports.userValidation = userValidation