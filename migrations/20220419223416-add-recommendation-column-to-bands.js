'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'bands',
      'recommendation',
      { type: DataTypes.STRING })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('bands', 'recommendation')
  }
}

