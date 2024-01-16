require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./src/routes/UserRoute");
const TransactionsRouter = require("./src/routes/TransactiosRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoute);
app.use(TransactionsRouter);

app.listen(process.env.LISTEN_PORT || "5000");
