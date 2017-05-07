'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('widgets', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      edition: Sequelize.STRING,
      finish: Sequelize.STRING,
      size: Sequelize.DOUBLE,
      price: Sequelize.DOUBLE,
      units: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }).then(() => {
      return queryInterface.createTable('orders', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        notes: Sequelize.STRING
      })
    }).then(() => {
      return queryInterface.createTable('orderLines', {
        //junction
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        quantity: Sequelize.INTEGER,
      })
    })
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropAllTables();
  }
};
