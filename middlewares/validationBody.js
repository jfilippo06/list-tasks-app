const { body } = require("express-validator");

const bodyLogin = [
    body('email', 'Email required').normalizeEmail().not().isEmpty(),
    body('email', 'Email is invalid').normalizeEmail().isEmail(),
    body('password', 'Password required').not().isEmpty(),
];

const bodyRegister = [
    body("name", "Enter a valid Name!").trim().notEmpty().escape(),
    body("password", "Enter a valid password!").trim().isLength({ min: 5 }).escape(),
    body("email", "Enter a valid email!").trim().isEmail().normalizeEmail(),
];
module.exports = {
  bodyLogin,
  bodyRegister,
};