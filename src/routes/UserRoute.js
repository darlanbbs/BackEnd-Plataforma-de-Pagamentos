const express = require("express");
const getUsers = require("../controllers/users/GetUsers");
const userRoute = express();


userRoute.get("/",getUsers)

module.exports = userRoute;