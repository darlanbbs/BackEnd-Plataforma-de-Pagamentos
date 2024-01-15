const express = require("express");
const cors = require("cors");
const { route } = require("./src/routes/paymentRoute");
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());

app.use(route);


app.listen(process.env.LISTEN_PORT || '5000');