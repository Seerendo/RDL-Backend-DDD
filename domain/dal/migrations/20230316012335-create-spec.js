'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('specs', {
      id: {
        allowNull: false,
        primaryKey: true,
        unique: false,
        type: Sequelize.STRING,
        field: 'specId'
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        values: ['VIGENTE', 'DESARROLLO', 'EN REVISION', 'HISTORICO'],
        defaultValue: 'DESARROLLO',
        type: Sequelize.ENUM
      },
      specType: {
        values: [
          'ESPEC. ALIMENTOS',
          'ESPEC. HCP',
          'ESPEC. EMPAQUE',
          'SIN ESPECIFICACION',
        ],
        defaultValue: 'SIN ESPECIFICACION',
        type: Sequelize.ENUM
      },
      userId: {
        references: {
          model: 'users',
          key: 'userId',      
        },
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('specs');
  }
};