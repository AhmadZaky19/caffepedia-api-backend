const db = require("../Configs/dbMysql");

const menuModel = {
  getAllMenus: (page, limit) => {
    return new Promise((resolve, reject) => {
      const offset = (page - 1) * limit;
      const getMenu =
        "SELECT menu.id_menu, menu.name, menu.price, menu.picture, category.name_category, menu.id_category FROM `category` JOIN menu ON menu.id_category=category.id_category ORDER BY id_menu ASC LIMIT ? OFFSET ?";
      db.query(getMenu, [Number(limit), offset], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  insertMenu: (body) => {
    const { name, picture, price, id_category } = body;
    return new Promise((resolve, reject) => {
      const queryInsert =
        "INSERT INTO menu SET name =?, id_category=?, price =?, picture =?";
      db.query(
        queryInsert,
        [name, id_category, price, picture],
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
  deleteById: (id) => {
    return new Promise((resolve, reject) => {
      const queryString = `DELETE FROM menu WHERE id_menu=${id}`;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  updateById: (body) => {
    return new Promise((resolve, reject) => {
      const queryString = `UPDATE menu SET ? WHERE id_menu=?`;
      db.query(queryString, [body, body.id_menu], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  searchByName: ({ name, by }) => {
    return new Promise((resolve, reject) => {
      const searchMenuByName = `SELECT menu.id_menu, menu.name, menu.price, menu.picture, category.name_category FROM category JOIN menu ON menu.id_category=category.id_category WHERE menu.name LIKE '%${name}%' ORDER BY ${by}`;
      db.query(searchMenuByName, (err, data) => {
        console.log(name.toString());
        if (!err) {
          if (data.length === 0) {
            reject({
              msg: "Data Not Found",
            });
          } else {
            resolve(data);
          }
        } else {
          reject(err);
        }
      });
    });
  },
  sortBy: (query) => {
    return new Promise((resolve, reject) => {
      const offset = (Number(query.page) - 1) * Number(query.limit);
      const sortByName = `SELECT menu.id_menu, menu.name, menu.price, menu.picture, category.name_category FROM category JOIN menu ON menu.id_category=category.id_category ORDER BY ${query.sortBy} ${query.sortOrder}`;
      db.query(sortByName, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          console.log(err);
          reject(err);
        }
      });
    });
  },
  insertToTrans: (body) => {
    const { invoice, cashier, orders, amount } = body;
    return new Promise((resolve, reject) => {
      const insert =
        "INSERT INTO history SET invoice=?, cashier=?, orders=?, amount=?";
      db.query(insert, [invoice, cashier, orders, amount], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getCategory: () => {
    return new Promise((resolve, reject) => {
      const getCat = "SELECT * FROM category";
      db.query(getCat, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = menuModel;
