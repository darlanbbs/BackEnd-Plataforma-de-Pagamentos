const blackListToken = [];

module.exports = {
  addToBlackList: (token) => {
    blackListToken.push(token);
  },
  checkBlackList: (token) => {
    return blackListToken.includes(token);
  },
};
