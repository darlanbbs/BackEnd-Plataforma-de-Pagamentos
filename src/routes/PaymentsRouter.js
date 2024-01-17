const express = require("express");
const PaymentsRouter = express();
const { checkToken } = require("../middleware/users/auth/Check-Auth");
const createPayment = require("../controllers/TransactionController/Payments/CreatePayment");
const {
  deleteCheckValuesPayment,
  UpdatePaymentMiddleware,
} = require("../middleware/TransactionMiddleware/Payment/CheckValue");
const {
  createPaymentSchema,
  updatePaymentSchema,
} = require("../validator/TransactionsSchema/PaymentsSchema");
const {
  getPayments,
} = require("../controllers/TransactionController/Payments/GetPayments");
const {
  deletePayment,
} = require("../controllers/TransactionController/Payments/DeletePayment");
const {
  updatePayment,
} = require("../controllers/TransactionController/Payments/UpdatePayment");
const CreatePaymentMiddleware = require("../middleware/TransactionMiddleware/Payment/PaymentValidationMiddleware");

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

PaymentsRouter.patch(
  "/payment/:id",
  checkToken,
  UpdatePaymentMiddleware(updatePaymentSchema),
  updatePayment
);

module.exports = PaymentsRouter;
