var express = require("express");
var router = express.Router();

router.get("/home", function (req, res, next) {
  res.json({
    _id: 1,
    username: "umur",
    fileCount: 16,
    lastLoginDate: "1 December 2019",
  });
});

module.exports = router;
