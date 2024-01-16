const jwt = require("jsonwebtoken");


module.exports = {
  newToken: async (id) => {
    const token = jwt.sign({ id: id }, process.env.JWT_PASS, {
      expiresIn: "1d",
    });
    return token;
  },
  verifyToken: async (token) => {
    const validToken = jwt.verify(
      token,
      process.env.JWT_PASS,
      (err, user) => {
        if (err) {
          return false;
        }
        return user;
      }
    );
    return validToken;
  },
};