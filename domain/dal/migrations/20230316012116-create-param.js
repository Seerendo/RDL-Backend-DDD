'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('params', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'paramId'
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cuali: {
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
      active: {
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
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
        type: Sequelize.ENUM
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('params');
  }
};