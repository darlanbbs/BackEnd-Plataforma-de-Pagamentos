const Joi = require('joi')

const authUser = Joi.object({
    email: Joi.string().email().required().min(3),
    senha: Joi.string().required().min(3),
})

module.exports = authUser