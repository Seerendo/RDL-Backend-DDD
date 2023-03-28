'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class param extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      param.belongsToMany(models.unit, {
        through: 'unit_param',
        as: 'units',
        foreignKey: 'paramId',
      });

      param.hasMany(models.spec_data);
    }
  }
  param.init({
    paramId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: DataTypes.STRING,
    cuali: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN,
    field: {
      values: [
        'FISICO & QUIMICO',
        'CONTAMINANTE',
        'INSTRUMENTAL',
        'MICROBIOLOGICO',
        'FUNCIONAL',
        'POR DEFINIR',
      ],
      defaultValue: 'POR DEFINIR',
      type: DataTypes.ENUM
    } 
  }, {
    sequelize,
    modelName: 'param',
    timestamps: false
  });
  return param;
};