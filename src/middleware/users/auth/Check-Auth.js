const { FindUserByEmail } = require("../../../repositories/UserRepository");
const { invalidData } = require("../../../utils/helpers/error-helpers");

const CheckAuth = (schema) => {
  return async (req, res, next) => {
    const { email } = req.body;
    const { error } = schema.validate(req.body, { abortEarly: true });
    const customError = invalidData();

    if (error) {
      const errorMessage = error.details[0].message;
      if (errorMessage) {
        return res.status(customError.status).json({ message: customError.message });
      }
    }

    if (!(await FindUserByEmail(email))) {
      return res.status(customError.status).json({ message: customError.message });
    }

    next();
  };
}

module.exports = CheckAuth;
