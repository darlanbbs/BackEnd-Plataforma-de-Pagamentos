const express = require("express");

const { checkToken } = require("../middleware/users/auth/Check-Auth");
const {
  getBalance,
} = require("../controllers/TransactionController/Balance/getBalance");
const TransactionValidationMiddleware = require("../middleware/TransactionMiddleware/TransactionValidationMiddleware");
const {
  createSaldoSchema,
} = require("../validator/TransactionsSchema/TransactionsSchema");
const {
  createBalance,
} = require("../controllers/TransactionController/Balance/CreateBalance");
const TransactionsRouter = express();

TransactionsRouter.get("/balance/:id", checkToken, getBalance);
TransactionsRouter.post(
  "/balance/:id",
  checkToken,
  TransactionValidationMiddleware(createSaldoSchema),
  createBalance
);
module.exports = TransactionsRouter;
