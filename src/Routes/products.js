const express = require("express");
const productsController = require("../Controllers/products");
const productMiddleware = require("../Helpers/Middlewares/middleware");
const checkToken = require("../Helpers/Middlewares/checkToken");
const uploadImg = require("../Helpers/Middlewares/uploadImage");

const productsRouter = express.Router();

productsRouter.get(
  "/",
  productMiddleware,
  checkToken.checkToken,
  productsController.getAllProducts
);
productsRouter.post(
  "/",
  uploadImg.singleUpload,
  productMiddleware,
  checkToken.checkTokenAdmin,
  productsController.postNewProduct
);
productsRouter.patch(
  "/:id",
  checkToken.checkTokenAdmin,
  productMiddleware,
  productsController.updateProduct,
  uploadImg.singleUpload
);
productsRouter.get(
  "/sortproduct",
  productMiddleware,
  checkToken.checkToken,
  productsController.sortProduct
);
productsRouter.delete(
  "/delete/:id",
  checkToken.checkTokenAdmin,
  productsController.deleteProduct
);
productsRouter.get(
  "/search",
  productMiddleware,
  checkToken.checkToken,
  productsController.searchProduct
);

module.exports = productsRouter;
