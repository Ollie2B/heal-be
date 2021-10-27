'use strict';
module.exports = (sequelize, DataTypes) => {
  const alarm = sequelize.define('alarm', {
    tag: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.STRING
    },
  });
  alarm.associate = function (models) {
    // associations can be defined here
    alarm.belongsTo(models.patient);
  };
  return alarm;
};