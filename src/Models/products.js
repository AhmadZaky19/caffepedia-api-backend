const db = require("../Configs/dbMySql");

// ALL
const productsModel = {
  getAllProducts: (page, limit) => {
    return new Promise((resolve, reject) => {
      const offset = (page - 1) * limit;
      const queryString =
        "SELECT product.id_product, product.name_product, category.name_category, product.price_product, product.img_product, product.created_at FROM product JOIN category ON product.id_category = category.id_category LIMIT ? OFFSET ?";
      db.query(queryString, [Number(limit), offset], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  // SORT PRODUCT BY
  sortProduct: (query) => {
    const sortBy = query.by;
    const sortOrder = query.order;
    return new Promise((resolve, reject) => {
      const queryString = `SELECT product.id_product, product.name_product, category.name_category, product.price_product, product.img_product, product.created_at FROM product JOIN category ON product.id_category = category.id_category ORDER BY product.${sortBy} ${sortOrder}`;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject({ msg: "Cannot Recognize Sort Request" });
        }
      });
    });
  },
  //  INSERT
  postNewProduct: (body) => {
    const queryString = "INSERT INTO product SET ?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [body], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  // UPDATE
  updateProduct: (id, body) => {
    return new Promise((resolve, reject) => {
      const queryString = `UPDATE product SET ? WHERE product.id_product = ${id}`;
      // resolve(body);
      db.query(queryString, body, (err, data) => {
        if (!err) {
          // console.log(data);
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  // DELETE
  deleteProduct: (id) => {
    return new Promise((resolve, reject) => {
      const queryString = `DELETE FROM product WHERE id_product = ${id}`;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  // SEARCH
  searchProduct: (product) => {
    const queryString = `SELECT product.id_product, product.name_product, category.name_category, product.price_product, product.img_product, product.created_at FROM product JOIN category ON product.id_category = category.id_category WHERE product.name_product LIKE "%${product.name_product}%"`;
    return new Promise((resolve, reject) => {
      db.query(queryString, (err, data) => {
        if (!err) {
          if (data.length !== 0) {
            resolve(data);
          }
          reject("Data not found !");
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = productsModel;
