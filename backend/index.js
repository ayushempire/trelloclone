const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.listen(port, (req, res) => {
  console.log("connected to port 5000");
});
