const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/test", (req, res) => {
  return res.render("index");
});

app.listen(8080, () => {
  console.log("123");
});
