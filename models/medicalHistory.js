'use strict';
module.exports = (sequelize, DataTypes) => {
  const medicalHistory = sequelize.define('medicalHistory', {
    detail: {
      allowNull: false,
      type: DataTypes.STRING
    },
    date: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
  });
  medicalHistory.associate = function (models) {
    // associations can be defined here
    medicalHistory.belongsTo(models.patient);
    medicalHistory.belongsTo(models.medic);
  };
  return medicalHistory;
};