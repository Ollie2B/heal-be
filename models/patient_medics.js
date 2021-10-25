'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient_medics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patient_medics.belongsTo(models.patients, {
        as: 'patient',
        foreignKey: 'patient_user_id'
      });
      patient_medics.belongsTo(models.medics, {
        as: 'medic',
        foreignKey: 'medic_user_id'
      });
    }
  };
  patient_medics.init({
    patient_user_id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    medic_user_id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    edit_permission: {
      allowNull: true,
      defaultValue: 0,
      type: DataTypes.BOOLEAN
    },
  }, {
    sequelize,
    modelName: 'patient_medics',
  });
  return patient_medics;
};
