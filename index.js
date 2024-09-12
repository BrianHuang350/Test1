const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/test", (req, res) => {
  res.render("Success");
});

app.listen(8080, () => {
  console.log("123");
});
