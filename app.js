const express = require("express");
const app = express();
const registerRoute = require("./routes/register");
const editRoute = require("./routes/edit");
// const apiRoute = require("./routes/api");

const port = 3000;

app.use("/assets", express.static("assets"));
// app.use("/api", apiRoute);
app.use("/register", registerRoute);
app.use("/edit", editRoute);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/main.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.listen(port, () => {
  console.log(`Started listening at http://localhost:${port}`);
});
