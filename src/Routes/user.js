const express = require("express");
const userRouter = express.Router();
const userController = require("../Controllers/user");

userRouter.patch("/:id", userController.updateUser)

module.exports = userRouter;
