const {
  checkValuePayment,
} = require("../../../repositories/PaymentRepositorie");
const {
  valueIsMandatory,
  valueUsedIsBiggerThanRest,
  initialValueIsMinorOrEqualsZero,
} = require("../../../utils/helpers/error-helpers");

const CreatePaymentMiddleware = (schema) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const { balanceId } = req.query;
    const { valor } = req.body;
    const values = await checkValuePayment(balanceId);

    if (!valor) {
      const customError = valueIsMandatory("Valor");
      return res
        .status(customError.status)
        .json({ message: customError.message });
    }
    if (values && values.valor_restante < valor) {
      const customError = valueUsedIsBiggerThanRest();
      return res
        .status(customError.status)
        .json({ message: customError.message });
    }
    if (valor <= 0) {
      const customError = initialValueIsMinorOrEqualsZero();
      return res
        .status(customError.status)
        .json({ message: customError.message });
    }
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errorMessage = error.details[0].message;
      if (errorMessage) {
        const customError = invalidData();
        return res
          .status(customError.status)
          .json({ message: customError.message });
      }
    }

    if (!id) {
      const customError = valueIsMandatory("Id");
      return res
        .status(customError.status)
        .json({ message: customError.message });
    }

    if (!balanceId) {
      const customError = valueIsMandatory("BalanceId");
      return res
        .status(customError.status)
        .json({ message: customError.message });
    }
    next();
  };
};

module.exports = CreatePaymentMiddleware;
