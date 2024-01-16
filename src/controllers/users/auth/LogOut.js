const {
  addToBlackList,
  checkBlackList,
} = require("../../../utils/BlackListToken");
const { invalidToken } = require("../../../utils/helpers/jwt-error-token");

const signOut = (req, res) => {
  const { authorization } = req.headers;
  const token = authorization && authorization.split(" ")[1];

  addToBlackList(token);

  if (!checkBlackList(token)) {
    return res
      .status(200)
      .json({ mensagem: "Sign out realizado com sucesso." });
  }
  const errInvalidToken = invalidToken();
  return res
    .status(errInvalidToken.status)
    .json({ mensagem: errInvalidToken.message });
};

module.exports = signOut;
