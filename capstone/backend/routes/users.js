const express = require("express");
const get = require('../models/users');
const { authenticateJWT, ensureCorrectUser } = require('../middleware/auth');
const { createToken } = require("../helpers/token");

const router = express.Router();


router.get("/:username",
    authenticateJWT,
    ensureCorrectUser,
    async function (req, res, next) {
        try {
            let user = await get(req.params.username)
            return res.json({ user });
        } catch (error) {
            return next(error);
        }
    });

module.exports = router;