'use strict';
module.exports = (sequelize, DataTypes) => {
  const medicalHistory = sequelize.define('medicalHistory', {
    detail: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.STRING
    },
  });
  medicalHistory.associate = function (models) {
    // associations can be defined here
    medicalHistory.belongsTo(models.patient);
    medicalHistory.belongsTo(models.medic);
  };
  return medicalHistory;
};