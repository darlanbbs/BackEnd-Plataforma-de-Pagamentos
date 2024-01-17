require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./src/routes/UserRoute");
const BalanceRouter = require("./src/routes/BalanceRouter");
const PaymentsRouter = require("./src/routes/PaymentsRouter");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoute);
app.use(BalanceRouter);
app.use(PaymentsRouter);

app.listen(process.env.LISTEN_PORT || "5000");
