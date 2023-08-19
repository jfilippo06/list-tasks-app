const { User } = require("../models");
const AppError = require("../errors/appErrors");

const createUser = async (name, hash, email) => {
    const user = await User.findOne({
        where: {
          email: email,
        },
      });
      if (user) throw new AppError("Usuario ya existe", 200);
      await User.create({
        name,
        password: hash,
        email,
      });
};

module.exports = {
  createUser,
};
