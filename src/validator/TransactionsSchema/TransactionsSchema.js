const Joi = require('joi');

const createSaldoSchema = Joi.object({
    nome: Joi.string().max(30).required(),
    descricao: Joi.string().allow('').max(255), 
    valor_inicial: Joi.number().positive().precision(2).required(),
    valor_restante: Joi.number().positive().precision(2).required(),
  });
  
  const createPagamentoSchema = Joi.object({
      nome: Joi.string().max(30).required(),
      descricao: Joi.string().allow('').max(255), 
      valor: Joi.number().positive().precision(2).required(),
      saldo_id: Joi.number().integer().positive().required(),
    });
  
  module.exports = {createSaldoSchema,createPagamentoSchema};