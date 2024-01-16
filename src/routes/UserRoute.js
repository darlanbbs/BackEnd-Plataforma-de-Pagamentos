const express = require("express");
const userRoute = express();
const getUsers = require("../controllers/users/GetUsers");
const createUser = require("../controllers/users/CreateUser");
const UserValidationMiddleware = require("../middleware/users/UserValidationMiddleware");
const { createUserSchema, updateUserSchema } = require("../validator/UsersSchema/UserSchema");
const deleteUser = require("../controllers/users/DeleteUser");
const deleteUserMiddleware = require("../middleware/users/DeleteUserMiddleware");
const updateUser = require("../controllers/users/edit/EditUser");
const loginUser = require("../controllers/users/auth/Login");



userRoute.get("/",getUsers)
userRoute.post("/",UserValidationMiddleware(createUserSchema),createUser)
userRoute.delete("/:id",deleteUserMiddleware,deleteUser)
userRoute.patch("/update/:id",UserValidationMiddleware(updateUserSchema),updateUser)
userRoute.post("/login", loginUser)
module.exports = userRoute;