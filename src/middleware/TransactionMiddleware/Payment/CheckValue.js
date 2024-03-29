const {
  checkPaymentExists,
} = require("../../../repositories/PaymentRepositorie");
const {
  initialValueIsMinorOrEqualsZero,
  valueIsMandatory,
  invalidData,
  valueUsedIsBiggerThanRest,
  unathourizedPermission,
} = require("../../../utils/helpers/error-helpers");

const deleteCheckValuesPayment = async (req, res, next) => {
  const { balanceId } = req.query;
  const { id } = req.params;
  const Payment = await checkPaymentExists(balanceId);
  if (!balanceId) {
    const customError = valueIsMandatory("BalanceId");
    return res
      .status(customError.status)
      .json({ message: customError.message });
  }
  if (!Payment) {
    const customError = valueIsMandatory("Pagamento");
    return res
      .status(customError.status)
      .json({ message: customError.message });
  }
  if (!id) {
    const customError = valueIsMandatory("Id");
    return res
      .status(customError.status)
      .json({ message: customError.message });
  }
  if (Payment.usuario_id != id) {
    const errUnathourizedPermission = unathourizedPermission();
    return res
      .status(errUnathourizedPermission.status)
      .json({ mensagem: errUnathourizedPermission.message });
  }
  next();
};

const UpdatePaymentMiddleware = (schema) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const { balanceId } = req.query;
    const { valor } = req.body;
    const values = await checkPaymentExists(balanceId);
    if (valor && values && values.valor_restante < valor) {
      const customError = valueUsedIsBiggerThanRest();
      return res
        .status(customError.status)
        .json({ message: customError.message });
    }
    if (valor && values && valor <= 0) {
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

module.exports = {
  deleteCheckValuesPayment,
  UpdatePaymentMiddleware,
};
