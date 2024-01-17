const { getBalanceById } = require("../../repositories/BalanceRepositorie");
const {
  valueIsMandatory,
  invalidData,
  restValuesIsBiggerThanZero,
  initialValueIsMinorOrEqualsZero,
} = require("../../utils/helpers/error-helpers");

const updateCheckValuesBalanceMiddleware = (schema) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const { balanceId } = req.query;
    if (req.body.valor_inicial <= 0) {
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

const deleteCheckValuesBalanceMiddleware = async (req, res, next) => {
  const { balanceId } = req.query;
  const { id } = req.params;
  const balance = await getBalanceById(balanceId);

  if (!balanceId) {
    const customError = valueIsMandatory("BalanceId");
    return res
      .status(customError.status)
      .json({ message: customError.message });
  }
  if (!balance) {
    const customError = valueIsMandatory("BalanceId");
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
  if (balance.valor_restante > 0) {
    const customError = restValuesIsBiggerThanZero();
    return res
      .status(customError.status)
      .json({ message: customError.message });
  }

  next();
};
module.exports = {
  updateCheckValuesBalanceMiddleware,
  deleteCheckValuesBalanceMiddleware,
};
