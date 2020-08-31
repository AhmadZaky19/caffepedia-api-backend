const express = require("express");

const productsRouter = require("./products");
const categoriesRouter = require("./categories");
const historiesRouter = require("./histories");
const authRouter = require("./auth");
const transactionRouter = require("./transaction");
const checkToken = require("../Helpers/Middlewares/checkToken");

const indexRouter = express.Router();

indexRouter.use("/", productsRouter);
indexRouter.use("/categories", categoriesRouter);
indexRouter.use("/histories", historiesRouter);
indexRouter.use("/auth", authRouter);
indexRouter.use("/transaction", transactionRouter);

module.exports = indexRouter;