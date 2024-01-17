const Joi = require("joi");

const createUserSchema = Joi.object({
  nome: Joi.string().min(3).required(),
  email: Joi.string().email().min(3).required(),
  senha: Joi.string().min(3).required(),
});

const updateUserSchema = Joi.object({
  nome: Joi.string().min(3),
  email: Joi.string().email().min(3),
  senha: Joi.string().min(3),
});

module.exports = { createUserSchema, updateUserSchema };
