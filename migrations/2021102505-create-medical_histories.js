'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('medical_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient_user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'patients',
          key: 'user_id'
        }
      },
      medic_user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'medics',
          key: 'user_id'
        }
      },
      detail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('medical_histories');
  }
};