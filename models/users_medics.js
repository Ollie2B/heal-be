'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_medics = sequelize.define('users_medics', {
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
    medicalRegistration: {
      allowNull: false,
      type: DataTypes.STRING
    },
    specialty: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'users_medics',
    classMethods: {}
  });
  users_medics.associate = function (models) {
    // associations can be defined here
  };
  return users_medics;
};