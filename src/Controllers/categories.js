const categoriesModel = require("../Models/categories");
const formResponse = require("../Helpers/Forms/formResponse");

const categoriesController = {
  getAllCategories: (_, res) => {
    categoriesModel
      .getCategory()
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = categoriesController;