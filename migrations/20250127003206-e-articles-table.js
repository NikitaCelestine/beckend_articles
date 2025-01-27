'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('articles', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      name_articles: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      text_articles: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
      },
      date: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false
      },
      date_update: {
        type: Sequelize.DataTypes.BIGINT,
      }
    })
  },
    async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('articles');
  }, 
};