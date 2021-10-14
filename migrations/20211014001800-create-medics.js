'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_medics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING,
        unique: true
      },
      medicalRegistration: {
        type: Sequelize.STRING
      },
      specialty: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users_medics');
  }
};