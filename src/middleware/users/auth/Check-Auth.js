const { FindUserByEmail } = require("../../../repositories/UserRepository");
const { verifyToken } = require("../../../services/jwt");
const {
  addToBlackList,
  checkBlackList,
} = require("../../../utils/BlackListToken");
const {
  invalidData,
  unathourizedPermission,
} = require("../../../utils/helpers/error-helpers");
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
  const { id } = req.params;
  const { authorization } = req.headers;
  const token = authorization && authorization.split(" ")[1];

  if (!token) {
    const errTokenNotProvided = tokenNotProvided();
    return res
      .status(errTokenNotProvided.status)
      .json({ mensagem: errTokenNotProvided.message });
  }

  const isValidToken = await verifyToken(token);

  const userIdFromToken = isValidToken.id;

  if (userIdFromToken != id) {
    const errUnathourizedPermission = unathourizedPermission();
    return res
      .status(errUnathourizedPermission.status)
      .json({ mensagem: errUnathourizedPermission.message });
  }

  if (!isValidToken || checkBlackList(token)) {
    const errInvalidToken = invalidToken();
    return res
      .status(errInvalidToken.status)
      .json({ mensagem: errInvalidToken.message });
  }
  addToBlackList(token);
  next();
};

module.exports = { CheckAuth, checkToken };
