const bcrypt = require('bcrypt')
const auth = require('../config/auth')
const { createUser } = require('../DAL/auth')

const registerServices = async (name, password, email) => {
    const salt = await bcrypt.genSalt(Number.parseInt(auth.rounds))
    const hash = await bcrypt.hash(password, salt)
    await createUser(name, hash, email)
}

module.exports = {
    registerServices,
}