const jwt = require("jsonwebtoken");
const formResponse = require("../formResponse");

const checkToken = {
  checkTokenAdmin: (req, res, next) => {
    const bearerToken = req.header("x-access-token");
    if (!bearerToken) {
      res.json({
        msg: "Please Login First !",
      });
    }
    try {
      const token = bearerToken.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      // console.log(decoded);
      if (decoded.id_level === 2) {
        req.decodedToken = decoded;
        next();
      } else {
        res.json({
          msg: "Access Blocked",
        });
      }
    } catch (e) {
      formResponse.error(res, e);
    }
  },
  checkToken: (req, res, next) => {
    const bearerToken = req.header("x-access-token");
    if (!bearerToken) {
      res.json({
        msg: "Please Login First !",
      });
    }
    try {
      const token = bearerToken.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.decodedToken = decoded;
      next();
    } catch (e) {
      formResponse.error(res, e);
    }
  },
};
module.exports = checkToken;
