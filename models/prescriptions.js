'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prescriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      prescriptions.belongsTo(models.patients, {
        as: 'patient',
        foreignKey: 'patient_user_id'
      });
      prescriptions.belongsTo(models.medics, {
        as: 'medic',
        foreignKey: 'medic_user_id'
      });
    }
  };
  prescriptions.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    patient_user_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    medic_user_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    img_ref: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'prescriptions',
  });
  return prescriptions;
};