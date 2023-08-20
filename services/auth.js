const bcrypt = require('bcrypt')
const auth = require('../config/auth')
const { createUser, findUser } = require('../DAL/auth')

const registerServices = async (name, password, email) => {
    const salt = await bcrypt.genSalt(Number.parseInt(auth.rounds))
    const hash = await bcrypt.hash(password, salt)
    await createUser(name, hash, email)
}

const loginServices = async (email, password) => {
    return await findUser(email, password);
}

module.exports = {
    registerServices,
    loginServices,
}