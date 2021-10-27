'use strict';
module.exports = (sequelize, DataTypes) => {
  const patientMedic = sequelize.define('patientMedic', {
    editPermission: {
      allowNull: true,
      defaultValue: 0,
      type: DataTypes.BOOLEAN
    },
  });
  patientMedic.associate = function (models) {
    // associations can be defined here
    models.patient.belongsToMany(models.medic, { through: patientMedic });
    models.medic.belongsToMany(models.patient, { through: patientMedic });
  };
  return patientMedic;
};