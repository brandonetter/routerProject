const express = require("express");
const app = express();
app.use(express.static(__dirname + "/scripts"));

app.get(["/:page", "/"], (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.listen(process.env.PORT || 2500, () => {
  console.log("Server Running!");
});
