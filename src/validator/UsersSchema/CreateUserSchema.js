const Joi = require('joi');

const createUserSchema = Joi.object({
  nome: Joi.string().min(3).required(),
  email: Joi.string().email().min(3).required(),
  senha: Joi.string().min(3).required(),
});

const associacaoPagamentoUsuarioSchema = Joi.object({
    pagamento_id: Joi.number().integer().positive().required(),
    usuario_id: Joi.number().integer().positive().required(),
  });

module.exports = {createUserSchema,associacaoPagamentoUsuarioSchema}