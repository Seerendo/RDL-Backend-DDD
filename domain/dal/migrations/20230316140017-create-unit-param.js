'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('unit_params', {
      paramId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'params',
          key: 'paramId'
        }
      },
      unitId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'units',
          key: 'unitId'
        }
      },
      active: {
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('unit_params');
  }
};