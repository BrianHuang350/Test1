const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/test", (req, res) => {
  return res.json({
    message: "成功部署",
  });
});

app.listen(8080, () => {
  console.log("123");
});
