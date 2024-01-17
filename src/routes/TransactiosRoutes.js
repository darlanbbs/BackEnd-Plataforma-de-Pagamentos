const express = require("express");

const { checkToken } = require("../middleware/users/auth/Check-Auth");
const {
  getBalance,
} = require("../controllers/TransactionController/Balance/getBalance");
const TransactionValidationMiddleware = require("../middleware/TransactionMiddleware/TransactionValidationMiddleware");
const {
  createSaldoSchema,
  updateSaldoSchema,
} = require("../validator/TransactionsSchema/BalanceSchema");
const {
  createBalance,
} = require("../controllers/TransactionController/Balance/CreateBalance");
const {
  UpdateBalanceValues,
} = require("../controllers/TransactionController/Balance/updateBalance");
const {
  updateCheckValuesBalanceMiddleware,
  deleteCheckValuesBalanceMiddleware,
} = require("../middleware/TransactionMiddleware/CheckValue");
const deleteBalance = require("../controllers/TransactionController/Balance/DeleteBalance");
const TransactionsRouter = express();

TransactionsRouter.get("/balance/:id", checkToken, getBalance);
TransactionsRouter.post(
  "/balance/:id",
  checkToken,
  TransactionValidationMiddleware(createSaldoSchema),
  createBalance
);
TransactionsRouter.patch(
  "/balance/update/:id",
  checkToken,
  updateCheckValuesBalanceMiddleware(updateSaldoSchema),
  UpdateBalanceValues
);
TransactionsRouter.delete(
  "/balance/delete/:id",
  checkToken,
  deleteCheckValuesBalanceMiddleware,
  deleteBalance
);
module.exports = TransactionsRouter;
