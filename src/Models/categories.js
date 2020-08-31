const db = require("../Configs/dbMySql");

const categoriesModel = {
  getCategory: () => {
    const queryString = "SELECT * FROM `category`";
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
};

module.exports = categoriesModel;