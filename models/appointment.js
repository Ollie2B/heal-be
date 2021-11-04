'use strict';
module.exports = (sequelize, DataTypes) => {
  const appointment = sequelize.define('appointment', {
    place: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.STRING
    },
    hour: {
      type: DataTypes.STRING
    }
  });
  appointment.associate = function (models) {
    // associations can be defined here
    appointment.belongsTo(models.patient);
    appointment.belongsTo(models.medic);
  };
  return appointment;
};