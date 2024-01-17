const Joi = require("joi");

const CreateBalanceSchema = Joi.object({
  nome: Joi.string().min(3).required(),
  descricao: Joi.string().allow("").max(255),
  valor_inicial: Joi.number().positive().precision(2).required(),
  valor_restante: Joi.allow(""),
  valor_utilizado: Joi.allow(""),
});

const updateBalanceSchema = Joi.object({
  nome: Joi.string().min(3),
  descricao: Joi.string().allow("").max(255),
  valor_inicial: Joi.number().positive().precision(2),
});

module.exports = { CreateBalanceSchema, updateBalanceSchema };
