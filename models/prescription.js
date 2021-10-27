'use strict';
module.exports = (sequelize, DataTypes) => {
  const prescription = sequelize.define('prescription', {
    img_ref: {
      allowNull: false,
      type: DataTypes.STRING
    },
  });
  prescription.associate = function (models) {
    // associations can be defined here
    prescription.belongsTo(models.patient);
    prescription.belongsTo(models.medic);
  };
  return prescription;
};