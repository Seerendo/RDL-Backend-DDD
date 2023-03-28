'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spec_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      spec_data.belongsTo(models.frecuency);
      spec_data.belongsTo(models.param);
      spec_data.belongsTo(models.process);
      spec_data.belongsTo(models.spec);
      spec_data.belongsTo(models.unit);
    }
  }
  spec_data.init({
    specId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    paramId: DataTypes.INTEGER,
    processId: DataTypes.INTEGER,
    unitId: DataTypes.INTEGER,
    frecuencyId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    minLote: DataTypes.DOUBLE,
    maxLote: DataTypes.DOUBLE,
    minCliente: DataTypes.DOUBLE,
    maxCliente: DataTypes.DOUBLE,
    minPlanta: DataTypes.DOUBLE,
    maxPlanta: DataTypes.DOUBLE,
    minCarga: DataTypes.DOUBLE,
    maxCarga: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'spec_data',
    timestamps: false
  });
  return spec_data;
};