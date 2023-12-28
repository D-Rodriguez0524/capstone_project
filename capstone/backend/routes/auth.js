const { register } = require('../models/users');
const { authenticate } = require("../models/users")
const express = require('express');
const router = new express.Router();
const { createToken } = require("../helpers/token");

router.post("/token", async function (res, req, next) {
    try {
        const { username, password } = req.body;
        const user = await authenticate(username, password);
        const token = createToken(user);
        return res.json({ token });
    } catch (e) {
        return next(e);
    }
});

router.post("/register", async function (res, req, next) {
    try {
        const newUser = await register({ ...req.body });
        const token = createToken({ newUser });
        return res.json(201).json({ token });
    } catch (e) {
        return next(e);
    }
});

module.exports = router;
