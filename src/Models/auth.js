const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../Configs/dbMySql");

const authModel = {
  postNewUser: (body) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (!err) {
          const { password } = body;
          bcrypt.hash(password, salt, (error, hashedPassword) => {
            if (!error) {
              const newBody = { ...body, password: hashedPassword };
              const qs = "SELECT username FROM users WHERE username = ?";
              const newQs = "INSERT INTO users SET ?";
              db.query(qs, newBody.username, (err, data) => {
                if (data.length) {
                  reject({ msg: "Username Already Exist" });
                }
                if (!data.length) {
                  db.query(newQs, newBody, (newErr, data) => {
                    if (!newErr) {
                      const { insertId, image = null, id_level = 1 } = data;
                      const { username, email } = body;
                      const payload = {
                        id: insertId,
                        username,
                        id_level,
                      };
                      const token = jwt.sign(payload, process.env.SECRET_KEY);
                      resolve({
                        msg: "Register Success",
                        id: insertId,
                        username,
                        email,
                        image,
                        id_level,
                        token,
                      });
                    } else {
                      reject({ msg: "Register Failed" });
                    }
                  });
                }
              });
            }
          });
        }
      });
    });
  },
  loginUser: (body) => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT id, username, password, id_level FROM users WHERE username=?";
      db.query(qs, body.username, (err, data) => {
        if (!err) {
          if (data.length) {
            bcrypt.compare(body.password, data[0].password, (error, result) => {
              if (!result) {
                reject({ msg: "Wrong Password" });
              } else if (result === true) {
                const { username } = body;
                const { id, email, image = null, id_level } = data[0];
                const payload = {
                  username,
                  id_level,
                };
                const token = jwt.sign(payload, process.env.SECRET_KEY);
                const msg = "Login Success";
                resolve({ msg, id, username, email, image, id_level, token });
              } else {
                reject({msg: 'Login Unsuccess'});
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
};
module.exports = authModel;
