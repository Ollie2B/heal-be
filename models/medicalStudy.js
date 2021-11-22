'use strict';
module.exports = (sequelize, DataTypes) => {
  const medicalStudy = sequelize.define('medicalStudy', {
    type: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.BLOB('long'),
    },
    date: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    }
  });
  medicalStudy.associate = function (models) {
    // associations can be defined here
    medicalStudy.belongsTo(models.patient)
  };
  return medicalStudy;
};