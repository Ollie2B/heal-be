'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      medics.belongsTo(models.users, {
        as: 'user',
        foreignKey: 'user_id'
      })
    }
  };
  medics.init({
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    medical_registration: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    specialty: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'medics',
  });
  return medics;
};