'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alarms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      alarms.belongsTo(models.patients, {
        as: 'user',
        foreignKey: 'patient_user_id'
      })
    }
  };
  alarms.init({
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
    tag: {
      allowNull: false,
      type: DataTypes.STRING
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'alarms',
  });
  return alarms;
};