const express = require("express");
const userRoute = express();
const getUsers = require("../controllers/users/GetUsers");
const createUser = require("../controllers/users/CreateUser");
const CreateUserValidationMiddleware = require("../middleware/users/CreateUserValidationMiddleware");
const { createUserSchema } = require("../validator/UsersSchema/CreateUserSchema");
const deleteUser = require("../controllers/users/DeleteUser");
const deleteUserMiddleware = require("../middleware/users/DeleteUserMiddleware");
;


userRoute.get("/",getUsers)
userRoute.post("/",CreateUserValidationMiddleware(createUserSchema),createUser)
userRoute.delete("/:id",deleteUserMiddleware,deleteUser)

module.exports = userRoute;