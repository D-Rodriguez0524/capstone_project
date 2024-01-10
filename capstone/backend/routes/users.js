const express = require("express");
const { getUser } = require("../models/users");
const {
  authenticateJWT,
  // ensureCorrectUser,
  // ensureLoggedIn,
} = require("../middleware/auth");

const router = express.Router();

router.get("/:username", authenticateJWT, async function (req, res, next) {
  try {
    console.log(req.params);
    let user = await getUser(req.params.username);
    console.log("user", user);
    return res.json({ user });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
