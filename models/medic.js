'use strict';
module.exports = (sequelize, DataTypes) => {
  const medic = sequelize.define('medic', {
    medicalRegistration: {
      type: DataTypes.STRING
    },
    specialty: {
      type: DataTypes.STRING
    }
  });
  medic.associate = function (models) {
    // associations can be defined here
    medic.belongsTo(models.user);
    medic.hasMany(models.medicalHistory);
    medic.belongsToMany(models.patient, { through: models.patientMedic });
  };
  return medic;
};