'use strict';
module.exports = (sequelize, DataTypes) => {
  const userType = sequelize.define('userType', {
    type: {
      type: DataTypes.STRING,
      unique: true
    }
  });
  userType.associate = function (models) {
    // associations can be defined here
    userType.hasMany(models.user)
  };
  return userType;
};