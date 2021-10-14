'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_patients = sequelize.define('users_patients', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    surname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    dni: {
      allowNull: false,
      type: DataTypes.STRING
    },
    mail: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'users_patients',
    classMethods: {}
  });
  users_patients.associate = function (models) {
    // associations can be defined here
  };
  return users_patients;
};