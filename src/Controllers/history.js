const historyModel = require("../Models/history");
const formResponse = require("../Helpers/formResponse");

const historyController = {
  showHistory: (_, res) => {
    historyModel
      .showHistory()
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  getAllHis: (_, res) => {
    historyModel
      .selectAllHis()
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  showByCashier: (req, res) => {
    historyModel
      .showByCashier(req.params.cashier)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = historyController;
