const db = require("../Configs/dbMysql");

const orderModel = {
  showOrder: ({ name }) => {
    const selectQuery = `SELECT * FROM user_order WHERE name='${name}'`;
    return new Promise((resolve, reject) => {
      const showQuery = selectQuery;
      db.query(showQuery, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  showAllORder: () => {
    const selectQuery = "SELECT * FROM user_order";
    return new Promise((resolve, reject) => {
      db.query(selectQuery, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  insertOrder: (body) => {
    const { date, name, orders, amount } = body;
    return new Promise((resolve, reject) => {
      const insertQuery =
        "INSERT INTO user_order SET date=?, name=?, orders=?, amount=?";
      db.query(insertQuery, [date, name, orders, amount], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  deleteOrder: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM user_order WHERE id=${id}`;
      db.query(query, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = orderModel;
