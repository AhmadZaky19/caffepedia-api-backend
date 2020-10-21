const db = require("../Configs/dbMySql");

const userModel = {
  updateUser: (id, body) => {
    return new Promise((resolve, reject) => {
      const queryStr = `UPDATE users SET ? WHERE users.id = ${id}`;
      db.query(queryStr, body, (err, data) => {
        if (!err) {
          console.log(data);
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = userModel;
