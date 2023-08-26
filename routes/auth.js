var express = require('express');
const { registerControler, loginControler } = require('../controllers/auth');
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const { bodyRegister, bodyLogin } = require("../middlewares/validationBody");
const validationResult = require("../middlewares/validationResult")

router.post(
  "/register",
  bodyRegister,
  validationResult,
  asyncHandler(registerControler)
);
router.post("/login", bodyLogin, validationResult, asyncHandler(loginControler))

module.exports = router;