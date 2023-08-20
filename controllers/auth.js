const { registerServices, loginServices } = require("../services/auth");
const generateToken = require('../helpers/jwt-generation')

const registerControler = async (req,res) => {
    try {
        const {name,password, email} = req.body
        await registerServices(name, password, email)
        res.status(201).json("User created")
    } catch (error) {
        res.status(error.code).json(error.message)
    }
}

const loginControler = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await loginServices(email, password)
        res.json({
            usuario: user.name,
            token: await generateToken(user)
        })
    } catch (error) {
        res.status(error.code).json(error.message)
    }
}

module.exports = {
    registerControler,
    loginControler,
}