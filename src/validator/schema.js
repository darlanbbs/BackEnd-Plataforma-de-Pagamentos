const Joi = require('joi');

const createUserSchema = Joi.object({
  nome: Joi.string().max(30).required(),
  email: Joi.string().email().max(255).required(),
  senha: Joi.string().max(18).required(),
});


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

  const associacaoPagamentoUsuarioSchema = Joi.object({
    pagamento_id: Joi.number().integer().positive().required(),
    usuario_id: Joi.number().integer().positive().required(),
  });

module.exports = {createUserSchema, createSaldoSchema,createPagamentoSchema,associacaoPagamentoUsuarioSchema};
