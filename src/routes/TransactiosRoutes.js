const express = require("express");

const { checkToken } = require("../middleware/users/auth/Check-Auth");
const {
  getBalance,
} = require("../controllers/TransactionController/Balance/getBalance");
const TransactionsRouter = express();

TransactionsRouter.get("/balance/:id", checkToken, getBalancealance);
module.exports = TransactionsRouter;
