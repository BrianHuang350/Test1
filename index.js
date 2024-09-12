const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

app.get("/test", (req, res) => {
  res.json({
    message: "it is working!",
  });
});

app.listen(8080, () => {
  console.log("123");
});
