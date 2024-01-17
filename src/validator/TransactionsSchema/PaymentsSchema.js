const Joi = require("joi");

const createPagamentoSchema = Joi.object({
  nome: Joi.string().max(30).required(),
  descricao: Joi.string().allow("").max(255),
  valor: Joi.number().positive().precision(2).required(),
  saldo_id: Joi.number().integer().positive().required(),
});

module.exports = { createPagamentoSchema };
