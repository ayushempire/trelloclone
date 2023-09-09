const express = require("express");

const router = express.Router();

// importing userschema
const userSchema = require("../Model/User");

router.post("/", (req, res) => {
  try {
    userSchema.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ succes: true });
  } catch (error) {
    res.json({ succes: false });
    console.log(error);
  }
});

module.exports = router;
