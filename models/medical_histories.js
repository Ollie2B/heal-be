'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medical_histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      medical_histories.belongsTo(models.patients, {
        as: 'patient',
        foreignKey: 'patient_user_id'
      });
      medical_histories.belongsTo(models.medics, {
        as: 'medic',
        foreignKey: 'medic_user_id'
      });
    }
  };
  medical_histories.init({
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
    detail: {
      allowNull: false,
      type: DataTypes.STRING
    },
    date: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
  }, {
    sequelize,
    modelName: 'medical_histories',
  });
  return medical_histories;
};