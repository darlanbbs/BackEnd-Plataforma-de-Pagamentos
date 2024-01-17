const Joi = require("joi");

const createPaymentSchema = Joi.object({
  nome: Joi.string().max(30).required(),
  descricao: Joi.string().allow("").max(255),
  valor: Joi.number().positive().precision(2).required(),
});

const updatePaymentSchema = Joi.object({
  nome: Joi.string().max(30),
  descricao: Joi.string().allow("").max(255),
  valor: Joi.number().positive().precision(2),
});
module.exports = { createPaymentSchema, updatePaymentSchema };
