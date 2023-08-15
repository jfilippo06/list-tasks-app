'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert(
       "users",
       [
         {
           id: 1,
           firstName: "John Doe",
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
