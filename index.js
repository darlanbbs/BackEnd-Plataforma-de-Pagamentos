require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./src/routes/UserRoute");
const BalanceRouter = require("./src/routes/BalanceRouter");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoute);
app.use(BalanceRouter);

app.listen(process.env.LISTEN_PORT || "5000");
