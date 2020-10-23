const express = require("express");

const checkToken = require("../Helpers/middleware/checktoken");

const menuRouter = require("./menu");
const historyRouter = require("./history");
const authRouter = require("../Routers/auth");
const orderUserRouter = require("./userOrder");

const indexRouter = express.Router();

indexRouter.use("/", menuRouter);
indexRouter.use("/history", checkToken.checkTokenAdmin, historyRouter);
indexRouter.use("/orderuser", orderUserRouter);

indexRouter.use("/auth", authRouter);
module.exports = indexRouter;
