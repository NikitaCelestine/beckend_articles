/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
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
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
        date_update: {
        type: Sequelize.DataTypes.BIGINT,
      },
      articles_Id: {
        type: Sequelize.DataTypes.BIGINT,
        references: {
          model: {
            tableName: 'articles',
          },
          key: 'id',
        },
        allowNull: false,
      },
    })
  },
    async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('comments');
  },
};
