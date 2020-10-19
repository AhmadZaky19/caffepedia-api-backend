const express = require("express");

const categoriesController = require("../Controllers/categories");

const categoriesRouter = express();

categoriesRouter.use("/", categoriesController.getAllCategories);

module.exports = categoriesRouter;