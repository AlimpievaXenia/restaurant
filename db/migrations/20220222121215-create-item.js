module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      ingredients: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      weight: {
        type: Sequelize.STRING,
      },
      proteins: {
        type: Sequelize.STRING,
      },
      fats: {
        type: Sequelize.STRING,
      },
      carbs: {
        type: Sequelize.STRING,
      },
      colories: {
        type: Sequelize.STRING,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  },
};
