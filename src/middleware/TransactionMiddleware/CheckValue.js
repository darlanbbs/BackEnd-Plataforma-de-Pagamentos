const {
  valueIsMandatory,
  invalidData,
} = require("../../utils/helpers/error-helpers");

const checkValuesUpdate = (schema) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const { balanceId } = req.query;
    const { error } = schema.validate(req.body, {
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

module.exports = checkValuesUpdate;
