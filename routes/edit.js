const express = require("express");

const router = express.Router();

var path = __dirname;

path = path.replace("routes", "");

const stylePath = "/views/edit/";

router.use("/assets", express.static("assets"));

router.get("/student", (req, res) => {
  res.sendFile(path + stylePath + "student.html");
});

router.get("/teacher", (req, res) => {
  res.sendFile(path + stylePath + "teacher.html");
});

module.exports = router;
