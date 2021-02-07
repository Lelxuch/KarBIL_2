const express = require("express");

const router = express.Router();
var path = __dirname;
path = path.replace("routes", "");
const stylePath = "/views/register/";

router.use("/assets", express.static("assets"));

router.get("/", (req, res) => {
  res.sendFile(path + stylePath + "register.html");
});

router.get("/alumni", (req, res) => {
  res.sendFile(path + stylePath + "alumni.html");
});

router.get("/enrollee", (req, res) => {
  res.sendFile(path + stylePath + "enrollee.html");
});

router.get("/parents", (req, res) => {
  res.sendFile(path + stylePath + "parents.html");
});

router.get("/student", (req, res) => {
  res.sendFile(path + stylePath + "student.html");
});

router.get("/teacher", (req, res) => {
  res.sendFile(path + stylePath + "teacher.html");
});

router.get("/forgot_password", (req, res) => {
  res.sendFile(path + stylePath + "forgot_password.html");
});

module.exports = router;
