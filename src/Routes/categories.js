const express = require("express");

const categoriesController = require("../Controllers/categories");

const categoriesRouter = express();

categoriesRouter.use("/categories", categoriesController.getAllCategories);

module.exports = categoriesRouter;