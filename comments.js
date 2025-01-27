const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});

const comments = sequelize.define(
    'comments', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER
        },
        text_comment: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: Sequelize.DataTypes.BIGINT,
            allowNull: false
        },
        date_update: {
            type: Sequelize.DataTypes.BIGINT,
        },
        articles_Id: {
            type: Sequelize.DataTypes.INTEGER,
            references: {
              model: {
                tableName: 'articles',
              },
              key: 'id',
            },
            allowNull: false,
        },
    },
    {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
    }
);

// `sequelize.define` возвращает модель
console.log(comments === sequelize.models.comments); // true

module.exports = comments