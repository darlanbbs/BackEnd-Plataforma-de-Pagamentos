const { FindUserByEmail } = require("../../../repositories/UserRepository");
const { verifyToken } = require("../../../services/jwt");
const { invalidData } = require("../../../utils/helpers/error-helpers");
const {
  tokenNotProvided,
  invalidToken,
} = require("../../../utils/helpers/jwt-error-token");

const CheckAuth = (schema) => {
  return async (req, res, next) => {
    const { email } = req.body;
    const { error } = schema.validate(req.body, { abortEarly: true });
    const invalidDataError = invalidData();

    if (error) {
      const errorMessage = error.details[0].message;
      if (errorMessage) {
        return res
          .status(invalidDataError.status)
          .json({ message: invalidDataError.message });
      }
    }

    if (!(await FindUserByEmail(email))) {
      return res
        .status(invalidDataError.status)
        .json({ message: invalidDataError.message });
    }

    next();
  };
};

const checkToken = async (req, res, next) => {
  const token = req.headers.authorization;
  const errTokenNotProvided = tokenNotProvided();
  const invalidToken = invalidToken();

  if (!token) {
    return res
      .status(errTokenNotProvided.status)
      .json({ mensagem: errTokenNotProvided.message });
  }

  if (await !verifyToken(token)) {
    return res
      .status(invalidToken.status)
      .json({ mensagem: invalidToken.message });
  }

  next();
};

module.exports = { CheckAuth, checkToken };
