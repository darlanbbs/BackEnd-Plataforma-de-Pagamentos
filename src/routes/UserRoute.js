const express = require("express");
const userRoute = express();
const getUsers = require("../controllers/users/GetUsers");
const createUser = require("../controllers/users/CreateUser");
const CreateUserValidationMiddleware = require("../middleware/users/CreateUserValidationMiddleware");
const { createUserSchema } = require("../validator/UsersSchema/CreateUserSchema");
;


userRoute.get("/",getUsers)
userRoute.post("/",CreateUserValidationMiddleware(createUserSchema),createUser)

module.exports = userRoute;