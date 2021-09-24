var express = require("express");
var router = express.Router();

const file = [
  {
    _id: 1,
    date: "7 November 2019",
    filename: "‘Snow.jpg’",
    fileSize: 1024,
    isPublic: true,
  },
  {
    _id: 2,
    date: "8 November 2019",
    filename: "Rain.jpg’",
    fileSize: 2024,
    isPublic: false,
  },
];

router.get("/file", function (req, res, next) {
  res.json(file);
});

module.exports = router;
