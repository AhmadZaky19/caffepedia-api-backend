const express = require("express");
const transactionController = require("../Controllers/transaction");

const transactionRouter = express.Router();

transactionRouter.get("/", transactionController.getAllTransaction);
transactionRouter.post("/addtransaction", transactionController.postTransaction);

module.exports = transactionRouter;