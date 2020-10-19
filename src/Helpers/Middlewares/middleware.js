const formResponse = require("../Forms/formResponse");
const _ = require("underscore");

const productMiddleware = (req, res, next) => {
  const requestPath = req.route.path;
  const requestMethod = req.method;
  const isQueryEmpty = _.isEmpty(req.query);
  const isParamsEmpty = _.isEmpty(req.params);
  const isBodyEmpty = _.isEmpty(req.body);

  if (
    requestMethod === "GET" &&
    (requestPath === "/" ||
      requestPath === "/sortproduct" ||
      requestPath === "/search")
  ) {
    if (requestPath === "/search" && isQueryEmpty) {
      const errorMsg = "request cannot be blank";
      formResponse.error(res, errorMsg);
    } else {
      next();
    }
  } else if (requestMethod === "GET" && requestPath === "/sortproduct") {
    if (isQueryEmpty) {
      const errorMsg = "request cannot be blank";
      formResponse.error(res, errorMsg);
    } else {
      next();
    }
  } else if (requestMethod === "DELETE" && requestPath === "/delete/:id") {
    if (isParamsEmpty) {
      const errorMsg = "request body cannot be blank";
      formResponse.error(res, errorMsg);
    } else {
      next();
    }
  } else if (requestMethod === "POST" && requestPath === "/") {
    if (isBodyEmpty) {
      const errorMsg = "request cannot be blank!";
      formResponse.error(res, errorMsg);
    } else {
      next();
    }
  } else if (requestMethod === "PATCH" && requestPath === "/:id") {
    if (isBodyEmpty) {
      const errMsg = "request cannot be blank!";
      formResponse.error(res, errMsg);
    } else {
      next();
    }
  } else {
    const errorMsg = "Cannot Recognize The Request!";
    formResponse.error(res, errorMsg);
  }
};

module.exports = productMiddleware;
