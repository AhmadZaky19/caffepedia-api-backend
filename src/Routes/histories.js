const express = require("express");

const historiesController = require("../Controllers/histories");

const historiesRouter = express();

historiesRouter.use("/histories", historiesController.getAllHistories);
historiesRouter.post("/addhistories", historiesController.postHistories);

module.exports = historiesRouter;