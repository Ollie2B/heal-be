'use strict';
module.exports = (sequelize, DataTypes) => {
  const alarm = sequelize.define('alarm', {
    tag: {
      allowNull: false,
      type: DataTypes.STRING
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
  });
  alarm.associate = function (models) {
    // associations can be defined here
    alarm.belongsTo(models.patient);
  };
  return alarm;
};