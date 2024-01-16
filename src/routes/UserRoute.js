const express = require("express");
const userRoute = express.Router({ mergeParams: true });
const getUsers = require("../controllers/users/GetUsers");
const createUser = require("../controllers/users/CreateUser");
const UserValidationMiddleware = require("../middleware/users/UserValidationMiddleware");
const {
  createUserSchema,
  updateUserSchema,
} = require("../validator/UsersSchema/UserSchema");
const deleteUser = require("../controllers/users/DeleteUser");
const deleteUserMiddleware = require("../middleware/users/DeleteUserMiddleware");
const updateUser = require("../controllers/users/edit/EditUser");
const loginUser = require("../controllers/users/auth/Login");
const {
  CheckAuth,
  checkToken,
} = require("../middleware/users/auth/Check-Auth");
const authUserSchema = require("../validator/UsersSchema/AuthUserSchema");

userRoute.get("/", getUsers);
userRoute.post("/", UserValidationMiddleware(createUserSchema), createUser);
userRoute.post("/login", CheckAuth(authUserSchema), loginUser);

// nescessario estar logado
userRoute.delete("/delete/:id", checkToken, deleteUserMiddleware, deleteUser);
userRoute.patch(
  "/update/:id",
  checkToken,
  UserValidationMiddleware(updateUserSchema),
  updateUser
);
module.exports = userRoute;
