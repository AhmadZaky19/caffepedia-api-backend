const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../Configs/dbMySql");
const authRouter = require("../Controllers/auth");

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
              db.query(qs, newBody.username, (secondErr, data) => {
                if (data.length) {
                  reject({ msg: "Username Already Exist" });
                }
                if (!data.length) {
                  db.query(newQs, newBody, (newErr, result) => {
                    if (!newErr) {
                      resolve(result);
                    } else {
                      reject(newErr);
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
        "SELECT users.username, users.password, levels.level FROM users JOIN levels ON users.id_level = levels.id WHERE username=?";
      db.query(qs, body.username, (err, data) => {
        if (!err) {
          if (data.length) {
            bcrypt.compare(body.password, data[0].password, (error, result) => {
              if (!result) {
                reject({ msg: "Wrong Password" });
              } else if (result === true) {
                const { username } = body;
                const { level_id } = data[0];
                const payload = {
                  username,
                  level_id,
                };
                const token = jwt.sign(payload, process.env.SECRET_KEY);
                const msg = "Login Success";
                resolve({ msg, token });
              } else {
                reject(error);
              }
            });
          } else {
            const msg = "Wrong Username";
            reject({ msg, err });
          }
        } else {
          reject(err);
        }
      });
    });
  },
};
module.exports = authModel;
