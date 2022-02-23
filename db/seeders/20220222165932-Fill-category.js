module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Холодные закуски',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Горячие закуски',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Супы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Мясные блюда',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Рыбные блюда',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Гриль меню',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Фирменные блюда',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Напитки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Categories',null, {restartIdentity:true, truncate:true});
  }
};
