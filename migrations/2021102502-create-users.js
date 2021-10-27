// 'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('users', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       first_name: {
//         allowNull: false,
//         type: Sequelize.STRING
//       },
//       last_name: {
//         allowNull: false,
//         type: Sequelize.STRING
//       },
//       dni: {
//         allowNull: false,
//         type: Sequelize.STRING
//       },
//       email: {
//         allowNull: false,
//         unique: true,
//         type: Sequelize.STRING
//       },
//       password: {
//         allowNull: false,
//         type: Sequelize.STRING
//       },
//       user_type_id: {
//         allowNull: false,
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'user_types',
//           key: 'id'
//         }
//       },
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('users');
//   }
// };
