'use strict';
module.exports = (sequelize, DataTypes) => {
  const prescription = sequelize.define('prescription', {
    detail: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.STRING
    }
  });
  prescription.associate = function (models) {
    // associations can be defined here
    prescription.belongsTo(models.patient);
    prescription.belongsTo(models.medic);
  };
  return prescription;
};