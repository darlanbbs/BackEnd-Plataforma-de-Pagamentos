const express = require("express");

const { checkToken } = require("../middleware/users/auth/Check-Auth");
const {
  getBalance,
} = require("../controllers/TransactionController/Balance/GetBalance");
const BalanceValidationMiddleware = require("../middleware/TransactionMiddleware/balance/BalanceValidationMiddleware");
const {
  CreateBalanceSchema,
  updateBalanceSchema,
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
} = require("../middleware/TransactionMiddleware/balance/CheckValue");
const deleteBalance = require("../controllers/TransactionController/Balance/DeleteBalance");
const BalanceRouter = express();

BalanceRouter.get("/balance/:id/", checkToken, getBalance);
BalanceRouter.post(
  "/balance/:id",
  checkToken,
  BalanceValidationMiddleware(CreateBalanceSchema),
  createBalance
);
BalanceRouter.patch(
  "/balance/update/:id",
  checkToken,
  updateCheckValuesBalanceMiddleware(updateBalanceSchema),
  UpdateBalanceValues
);
BalanceRouter.delete(
  "/balance/delete/:id",
  checkToken,
  deleteCheckValuesBalanceMiddleware,
  deleteBalance
);
module.exports = BalanceRouter;
