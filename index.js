require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PaymentRoute = require("./src/routes/paymentRoute");
const userRoute = require("./src/routes/UserRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoute);
app.use(PaymentRoute);

app.listen(process.env.LISTEN_PORT || "5000");
