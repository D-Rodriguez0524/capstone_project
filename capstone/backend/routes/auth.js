const { register } = require("../models/users");
const { authenticate } = require("../models/users");
const express = require("express");
const router = new express.Router();
const { createToken } = require("../helpers/token");

router.post("/token", async function (req, res, next) {
  try {
    // console.log(req.body);
    const { username, password } = req.body;
    const user = await authenticate(username, password);
    // console.log(user);
    const token = createToken({ user });
    // console.log(token);
    return res.json({ token, user });
  } catch (e) {
    return res.status(500);
  }
});

router.post("/register", async function (req, res, next) {
  try {
    // console.log(req.body);
    const newUser = await register({ ...req.body });
    const token = createToken({ newUser });
    return res.json(201).json({ token });
  } catch (e) {
    // console.log(e);
    return res.status(500);
  }
});

module.exports = router;
