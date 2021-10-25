'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('patient_medics', {
      patient_user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'patients',
          key: 'user_id'
        }
      },
      medic_user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'medics',
          key: 'user_id'
        },
      },
      edit_permission: {
        allowNull: true,
        defaultValue: 0,
        type: Sequelize.BOOLEAN
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('patient_medics');
  }
};