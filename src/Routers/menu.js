const express = require("express");

const menuController = require("../Controllers/menu");
const upload = require("../Helpers/middleware/upload");
const checkToken = require("../Helpers/middleware/checktoken");

const menuRouter = express.Router();

// get all menu
menuRouter.get("/", menuController.getAllMenus);

// insert new menu
menuRouter.post(
  "/",
  upload.singleUpload,
  //   checkToken.checkToken,
  menuController.insertMenus
);

// delete existing menu
menuRouter.delete(
  "/",
  //   upload.singleUpload,
  //   checkToken.checkToken,
  menuController.deleteByid
);

// update existing menu
menuRouter.patch(
  "/",
  upload.singleUpload,
//   checkToken.checkToken,
  menuController.updateById
);

// search menu by name
menuRouter.get("/search", menuController.searchByName);

// sort by
menuRouter.get("/sortProduct", menuController.sortBy);

menuRouter.post("/insertTrans", menuController.insertTrans);

menuRouter.get("/category", menuController.getCategory);

module.exports = menuRouter;
