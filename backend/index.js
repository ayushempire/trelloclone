const express = require("express");

const app = express();
const MONGODB = require("./Connection");

MONGODB();
app.get("/", (req, res) => {
  res.json({ success: true });
});

app.use(express.json());
app.use("/api/CreateUser", require("./Routes/CreateUser"));

app.listen(5000, (req, res) => {
  console.log("connected to the prot 5000");
});
