const userModel = require("../Models/user");
const formResponse = require("../Helpers/Forms/formResponse");

const userController = {
  updateUser: (req, res) => {
    userModel
      .updateUser(req.params.id, req.body)
      .then((data) => {
        const responData = {
          ...req.body,
          msg: "Update Successfull",
        };
        formResponse.success(res, responData, 201);
      })
      .catch((err) => {
        console.log(err);
        formResponse.error(res, err, 500);
      });
  },
};

module.exports = userController;
