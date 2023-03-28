'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class frecuency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      frecuency.hasMany(models.spec_data);
    }
  }
  frecuency.init({
    frecuencyId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    description: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'frecuency',
    timestamps: false
  });
  return frecuency;
};