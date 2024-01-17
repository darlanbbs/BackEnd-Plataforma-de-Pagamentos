const express = require("express");
const PaymentsRouter = express();
const { checkToken } = require("../middleware/users/auth/Check-Auth");
const createPayment = require("../controllers/TransactionController/Payments/CreatePayment");
const CreatePaymentMiddleware = require("../middleware/TransactionMiddleware/Payment/CheckValue");
const {
  createPaymentSchema,
} = require("../validator/TransactionsSchema/PaymentsSchema");

PaymentsRouter.post(
  "/payment/:id",
  checkToken,
  CreatePaymentMiddleware(createPaymentSchema),
  createPayment
);

module.exports = PaymentsRouter;