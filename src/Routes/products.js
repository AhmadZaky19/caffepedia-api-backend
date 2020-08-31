const express = require("express");
const productsController = require("../Controllers/products");
const productMiddleware = require("../Helpers/Middlewares/middleware");
const checkToken = require("../Helpers/Middlewares/checkToken");
const uploadImg = require("../Helpers/Middlewares/uploadImage");

const productsRouter = express.Router();

productsRouter.get("/", productMiddleware, productsController.getAllProducts);
productsRouter.post(
  "/",
  uploadImg.singleUpload,
  productMiddleware,
  productsController.postNewProduct
);
productsRouter.patch(
  "/",
  productMiddleware,
  productsController.updateProduct
);
productsRouter.get(
  "/sortproductby",
  productMiddleware,
  productsController.sortProductBy
);
productsRouter.delete(
  "/delete/:id",
  productsController.deleteProduct
);
productsRouter.get(
  "/search",
  productMiddleware,
  productsController.searchProduct
);
productsRouter.get(
  "/pagination",
  productMiddleware,
  productsController.getPaginatedProducts
);

module.exports = productsRouter;
