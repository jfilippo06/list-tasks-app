const { User } = require("../models");
const AppError = require("../errors/appErrors");
const bcrypt = require("bcrypt");

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

const findUser = async (email, password) => {
  const user = await User.findOne({
    where: {
      email: email,
    }
  });
  if (!user) throw new AppError("Usuario no existe", 404);
  if (!bcrypt.compareSync(password, user.password))
    throw new AppError("Contraseña no valida", 404);
  return user;
}

module.exports = {
  createUser,
  findUser,
};
