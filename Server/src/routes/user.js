const {login} = require("../controllers/login")
const express = require('express');
const userRouter = express.Router();

userRouter.get("/login", login);

module.exports = userRouter