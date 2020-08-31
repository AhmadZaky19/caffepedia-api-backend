const historiesModel = require("../Models/histories");
const formResponse = require("../Helpers/Forms/formResponse");

const historiesController = {
  getAllHistories: (_, res) => {
    historiesModel
      .getAllHistories()
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  postHistories: (req, res) => {
    historiesModel
      .postHistories(req.body)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = historiesController;