const productsModel = require("../Models/products");
const formResponse = require("../Helpers/Forms/formResponse");
const moment = require("moment");

const productsController = {
  // ALL
  getAllProducts: (req, res) => {
    const { page, limit } = req.query;
    productsModel
      .getAllProducts(page, limit)
      .then((data) => {
        formResponse.pagination(req, res, data, 200);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
  // SORT PRODUCT BY
  sortProduct: (req, res) => {
    productsModel
      .sortProduct(req.query)
      .then((data) => {
        formResponse.success(res, data, 200);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
  // ADD
  postNewProduct: (req, res) => {
    productsModel
      .postNewProduct(req.body)
      .then((data) => {
        const responseData = {
          ...req.body,
          id_product: data.insertId,
          created_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          updated_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        };
        formResponse.success(res, responseData, 201);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
  // UPDATE
  updateProduct: (req, res) => {
    productsModel
      .updateProduct(req.params.id, req.body)
      .then((data) => {
        const responseData = {
          ...req.body,
          msg: `Update Product with id_product: ${req.params.id} was Successful`,
          updated_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        };
        formResponse.success(res, responseData, 201);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
  // DELETE
  deleteProduct: (req, res) => {
    productsModel
      .deleteProduct(req.params.id)
      .then((data) => {
        const responseData = {
          id: data.insertId,
          ...req.body,
          msg: `Delete Product with id: ${req.params.id} was Successful`,
        };
        formResponse.success(res, responseData, data, 200);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
  // SEARCH
  searchProduct: (req, res) => {
    productsModel
      .searchProduct(req.query)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = productsController;
