const menuModel = require("../Models/menu");
const formResponse = require("../Helpers/formResponse");

const menuController = {
  getAllMenus: (req, res) => {
    const { page, limit } = req.query;
    menuModel
      .getAllMenus(page, limit)
      .then((data) => {
        formResponse.pagination(req, res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  insertMenus: (req, res) => {
    menuModel
      .insertMenu(req.body)
      .then((data) => {
        const respondata = {
          ...req.body,
          msg: "Insert Menu Success",
          data: data,
        };
        formResponse.success(res, respondata);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  deleteByid: (req, res) => {
    menuModel
      .deleteById(req.query.id)
      .then((data) => {
        const msg = {
          msg: `Delete Product with id ${req.query.id} Successful`,
        };
        formResponse.success(res, msg, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  updateById: (req, res) => {
    menuModel
      .updateById(req.body)
      .then((data) => {
        const responseData = {
          ...req.body,
          msg: "Update Product was Successful",
        };
        formResponse.success(res, responseData, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  searchByName: (req, res) => {
    menuModel
      .searchByName(req.query)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  sortBy: (req, res) => {
    menuModel
      .sortBy(req.query)
      .then((data) => {
        formResponse.paginationSort(req.query, res, data);
      })
      .catch((err) => {
        console.log(err);
        formResponse.error(res, err);
      });
  },
  insertTrans: (req, res) => {
    menuModel
      .insertToTrans(req.body)
      .then((data) => {
        const resData = {
          ...req.body,
        };
        formResponse.success(res, resData);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  getCategory: (_, res) => {
    menuModel
      .getCategory()
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = menuController;
