const { registerServices } = require("../services/auth");

const registerControler = async (req,res) => {
    try {
        const {name,password, email} = req.body
        await registerServices(name, password, email)
        res.status(201).json("User created")
    } catch (error) {
        res.status(error.code).json(error.message)
    }
}

module.exports = {
    registerControler,
}