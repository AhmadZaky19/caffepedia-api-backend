const authModel = require("../Models/auth");
const formResponse = require("../Helpers/formResponse");

const authController = {
  register: (req, res) => {
    authModel
      .register(req.body)
      .then((data) => {
        const respondata = {
          ...req.body,
          id: data.insertid,
          password: "encypted",
        };
        formResponse.success(res, respondata);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  loginUser: (req, res) => {
    authModel
      .loginUser(req.body)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  updateUser: (req, res) => {
    authModel
      .updateUser(req.body)
      .then((data) => {
        const responData = {
          ...req.body,
          msg: "Update Successfull",
        };
        formResponse.success(res, responData);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  getDatauser: (req, res) => {
    authModel
      .getDataUser(req.query)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = authController;
