const db = require("../Configs/dbMySql");

const historiesModel = {
  getAllHistories: () => {
    const queryString =
      "SELECT invoice.no_invoice, invoice.cashier, invoice.amount, invoice.create_at, product.name_product ,history.qty, history.total_price FROM invoice JOIN history ON history.invoice=invoice.no_invoice JOIN product ON product.id_product = history.product_id ORDER BY invoice.create_at DESC";
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
  postHistories: (body) => {
    const { productOrder, invoice, cashier, amount } = body;
    let totalOrder = productOrder.map((item) => {
      return [item.invoice, item.product_id, item.qty, item.total_price];
    });
    const queryString = `START TRANSACTION; INSERT INTO history(invoice, product_id, qty, total_price) VALUES?; INSERT INTO invoice SET no_invoice=?, cashier=?, amount=?; COMMIT;`;
    return new Promise((resolve, reject) => {
      db.query(
        queryString,
        [totalOrder, invoice, cashier, amount],
        (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err);
          }
        }
      );
    });
  },
};

module.exports = historiesModel;