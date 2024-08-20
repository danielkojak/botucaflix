'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
      [
        {
          name: 'Daniel Kojak',
          email: "daniel.kojak@gmail.com",
          birthday: '1987-11-12',
          password: "senha123",
        }
      ], {});     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
