const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    const nameFormat = `${Date.now()}-${file.fieldname}${path.extname(
      file.originalname
    )}`;
    cb(null, nameFormat);
  },
});
const limits = {
  fileSize: 1 * 5000 * 5000,
};
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpg|jpeg|gif|png/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  if (extName) {
    cb(null, true);
  } else {
    cb("Error: Images Only");
  }
};
const upload = multer({
  storage,
  limits,
  fileFilter,
});

const uploadFile = {
  singleUpload: (req, res, next) => {
    const singleUpload = upload.single("picture");
    singleUpload(req, res, (err) => {
      if (err) {
        res.json({
          msg: err,
        });
      } else {
        try {
          req.body.picture = `http://34.205.76.141:8000/images/${req.file.filename}`;
        } catch {
          console.log(err);
        } finally {
          next();
        }
      }
    });
  },
};

module.exports = uploadFile;
