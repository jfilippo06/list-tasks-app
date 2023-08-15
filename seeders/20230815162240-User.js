'use strict';
const bcrypt = require('bcrypt')
const auth = require('../config/auth')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(Number.parseInt(auth.rounds))
    const password = await bcrypt.hash(auth.password_user, salt)
     await queryInterface.bulkInsert(
       "users",
       [
         {
           id: 1,
           name: "John Doe",
           password: password,
           email: "John Doe",
           createdAt: new Date(),
           updatedAt: new Date(),
         },
       ],
       {}
     );
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
