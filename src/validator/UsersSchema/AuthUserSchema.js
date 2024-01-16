const Joi = require('joi')

const authUserSchema = Joi.object({
    email: Joi.string().email().required().min(3),
    senha: Joi.string().required().min(3),
})

module.exports = authUserSchema