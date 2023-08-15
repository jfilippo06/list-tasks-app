require('dotenv').config()

module.exports = {
    rounds: process.env.AUTH_ROUNDS,
    password_user: process.env.AUTH_PASSWORD_USER,
}