const { invalidData } = require("../../../utils/helpers/error-helpers");

const addDefaultValue = (data) => {
  if ("valor_inicial" in data) {
    data.valor_restante = data.valor_inicial;
  }
  if ("valor_restante" in data) {
    data.valor_utilizado = 0;
  }
  return data;
};

const TransactionValidationMiddleware = (schema) => {
  return async (req, res, next) => {
    try {
      const dataWithDefaultValue = addDefaultValue(req.body);

      const { error } = schema.validate(dataWithDefaultValue, {
        abortEarly: false,
      });
      if (error) {
        const errorMessage = error.details[0].message;
        if (errorMessage) {
          const customError = invalidData();
          return res
            .status(customError.status)
            .json({ message: customError.message });
        }
      }

      req.body = dataWithDefaultValue;
      next();
    } catch (error) {
      return res.status(500).json(`Erro interno do servidor ${error}`);
    }
  };
};

module.exports = TransactionValidationMiddleware;
