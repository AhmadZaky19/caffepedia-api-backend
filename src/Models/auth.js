const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../Configs/dbMysql");

const authModel = {
  register: (body) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          reject(err);
        }
        const { password, username } = body;
        bcrypt.hash(password, salt, (err, encryptedPass) => {
          if (err) {
            reject(err);
          }
          const checkQuery = `SELECT username FROM users WHERE username ='${username}'`;
          db.query(checkQuery, (err, data) => {
            if (err) {
              reject(err);
            } else {
              if (data.length) {
                reject("Username Already Exist");
              } else {
                const newBody = { ...body, password: encryptedPass };
                const queryInsert = "INSERT INTO users SET ?";
                db.query(queryInsert, newBody, (err, data) => {
                  if (!err) {
                    resolve(data);
                  } else {
                    reject(err);
                  }
                });
              }
            }
          });
        });
      });
    });
  },
  loginUser: (body) => {
    return new Promise((resolve, reject) => {
      const { username, password } = body;
      const queryLevel =
        "SELECT id, username, password, id_level FROM users WHERE username=?";
      db.query(queryLevel, username, (err, data) => {
        if (!err) {
          if (data.length) {
            bcrypt.compare(password, data[0].password, (error, result) => {
              if (!result) {
                reject({ msg: "Wrong Password" });
              } else if (result === true) {
                const { id, id_level } = data[0];
                const payload = {
                  username,
                  id_level,
                };
                const token = jwt.sign(payload, process.env.SECRET_KEY, {
                  expiresIn: "6h",
                });
                const msg = "Login Success";
                resolve({ token, msg, username, id_level, id });
              } else {
                reject({ msg: "Login Unsuccess" });
              }
            });
          } else {
            const msg = "Wrong Username";
            reject({ msg });
          }
        } else {
          reject(err);
        }
      });
    });
  },
  updateUser: (body) => {
    return new Promise((resolve, reject) => {
      const queryString = "UPDATE users SET? WHERE id=?";
      db.query(queryString, [body, body.id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getDataUser: ({ id }) => {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT * FROM users WHERE id=${id}`;
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

module.exports = authModel;
