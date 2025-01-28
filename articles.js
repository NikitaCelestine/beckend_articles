const { Sequelize, DataTypes } = require('sequelize');
const comments = require('./comments');

const sequelize = new Sequelize('postgres', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});

const articles = sequelize.define(
    'articles', {
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
    },
    {
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    }
);

console.log(articles === sequelize.models.articles); 

module.exports = articles