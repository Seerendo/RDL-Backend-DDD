'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      spec.belongsTo(models.user);

      spec.hasOne(models.spec_data);
    }
  }
  spec.init({
    specId: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    description: DataTypes.STRING,
    status: {
      values: ['VIGENTE', 'DESARROLLO', 'EN REVISION', 'HISTORICO'],
      defaultValue: 'DESARROLLO',
      type: DataTypes.ENUM
    },
    specType: {
      values: [
        'ESPEC. ALIMENTOS',
        'ESPEC. HCP',
        'ESPEC. EMPAQUE',
        'SIN ESPECIFICACION',
      ],
      defaultValue: 'SIN ESPECIFICACION',
      type: DataTypes.ENUM
    },
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'spec',
    timestamps: false
  });
  return spec;
};