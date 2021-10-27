'use strict';
module.exports = (sequelize, DataTypes) => {
  const patient = sequelize.define('patient', {
    weight: {
      type: DataTypes.STRING
    },
    height: {
      type: DataTypes.STRING
    }
  });
  patient.associate = function (models) {
    // associations can be defined here
    patient.belongsTo(models.user);
  };
  return patient;
};