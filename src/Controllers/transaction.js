const transactionModel = require("../Models/transaction");
const formResponse = require("../Helpers/Forms/formResponse");

const transactionController = {
  getAllTransaction: (_, res) => {
    transactionModel
      .getAllTransaction()
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  postTransaction: (req, res) => {
    transaksiModel
      .postTransaction(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = transactionController;