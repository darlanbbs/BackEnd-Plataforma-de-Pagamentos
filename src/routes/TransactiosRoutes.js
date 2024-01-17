const express = require("express");

const { checkToken } = require("../middleware/users/auth/Check-Auth");
const {
  getBalance,
} = require("../controllers/TransactionController/Balance/getBalance");
const TransactionValidationMiddleware = require("../middleware/TransactionMiddleware/TransactionValidationMiddleware");
const {
  createSaldoSchema,
} = require("../validator/TransactionsSchema/BalanceSchema");
const {
  createBalance,
} = require("../controllers/TransactionController/Balance/CreateBalance");
const {
  updateInitialValue,
} = require("../controllers/TransactionController/Balance/updateBalance");
const TransactionsRouter = express();

TransactionsRouter.get("/balance/:id", checkToken, getBalance);
TransactionsRouter.post(
  "/balance/:id",
  checkToken,
  TransactionValidationMiddleware(createSaldoSchema),
  createBalance
);
TransactionsRouter.patch("/balance/update/:id", checkToken, updateInitialValue);
module.exports = TransactionsRouter;
