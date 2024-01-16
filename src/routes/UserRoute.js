const express = require("express");
const userRoute = express.Router({ mergeParams: true });
const { getUsers, getUser } = require("../controllers/users/GetUsers");
const createUser = require("../controllers/users/CreateUser");
const UserValidationMiddleware = require("../middleware/users/UserValidationMiddleware");
const {
  createUserSchema,
  updateUserSchema,
} = require("../validator/UsersSchema/UserSchema");
const deleteUser = require("../controllers/users/DeleteUser");
const updateUser = require("../controllers/users/edit/EditUser");
const loginUser = require("../controllers/users/auth/Login");
const {
  CheckAuth,
  checkToken,
} = require("../middleware/users/auth/Check-Auth");
const authUserSchema = require("../validator/UsersSchema/AuthUserSchema");
const signOut = require("../controllers/users/auth/LogOut");
const UserExists = require("../middleware/users/UserExistMIddleware");

userRoute.get("/", getUsers);
userRoute.post("/", UserValidationMiddleware(createUserSchema), createUser);
userRoute.post("/signin", CheckAuth(authUserSchema), loginUser);

// nescessario estar logado
userRoute.post("/signout", checkToken, signOut);
userRoute.delete("/delete/:id", UserExists, checkToken, deleteUser);
userRoute.get("/:id", UserExists, checkToken, getUser);
userRoute.patch(
  "/update/:id",
  UserExists,
  checkToken,
  UserValidationMiddleware(updateUserSchema),
  updateUser
);
module.exports = userRoute;
