'use strict';
module.exports = (sequelize, DataTypes) => {
  const patients = sequelize.define('patients', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    dni: {
      allowNull: false,
      type: DataTypes.STRING
    },
    mail: {
      allowNull: true,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    birthDate: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'patients',
    classMethods: {}
  });
  patients.associate = function (models) {
    // associations can be defined here
  };
  return patients;
};