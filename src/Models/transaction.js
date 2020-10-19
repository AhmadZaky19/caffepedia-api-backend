const db = require("../Configs/dbMySql");

const transactionModel = {
  getAllTransaction: () => {
    const queryString =
      "SELECT * FROM `transaction` ORDER BY transaction.id_trans DESC";
    return new Promise((resolve, reject) => {
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  postTransaction: (body) => {
    const { invoice, cashier, orders, amount } = body;
    const queryString = `INSERT INTO transaction SET invoice=?, name_cashier =?, orders =?, amount =?`;
    return new Promise((resolve, reject) => {
      db.query(queryString, [invoice, cashier, orders, amount], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = transactionModel;