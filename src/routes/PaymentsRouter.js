const express = require("express");
const PaymentsRouter = express();
const { checkToken } = require("../middleware/users/auth/Check-Auth");
const createPayment = require("../controllers/TransactionController/Payments/CreatePayment");
const {
  CreatePaymentMiddleware,
  deleteCheckValuesPayment,
} = require("../middleware/TransactionMiddleware/Payment/CheckValue");
const {
  createPaymentSchema,
} = require("../validator/TransactionsSchema/PaymentsSchema");
const {
  getPayments,
} = require("../controllers/TransactionController/Payments/GetPayments");
const {
  deletePayment,
} = require("../controllers/TransactionController/Payments/DeletePayment");

PaymentsRouter.post(
  "/payment/:id",
  checkToken,
  CreatePaymentMiddleware(createPaymentSchema),
  createPayment
);

PaymentsRouter.get("/payment/:id/:page", checkToken, getPayments);
PaymentsRouter.delete(
  "/payment/:id",
  deleteCheckValuesPayment,
  checkToken,
  deletePayment
);

module.exports = PaymentsRouter;
