var express = require('express');
const { registerControler } = require('../controllers/auth');
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");

router.post("/register", asyncHandler(registerControler));

module.exports = router;