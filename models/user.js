'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING
    },
    surname: {
      type: DataTypes.STRING
    },
    dni: {
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
  });
  user.associate = function (models) {
    // associations can be defined here
    user.hasOne(models.medic);
    user.belongsTo(models.userType);
    user.hasOne(models.patient);
  };
  return user;
};