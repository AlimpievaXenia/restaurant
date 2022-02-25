module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [
      {
        itemId: 1,
        url: '/photos/IMG_2187.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 2,
        url: '/photos/IMG_2189.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 3,
        url: '/photos/IMG_2252.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 4,
        url: '/photos/IMG_2253.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 5,
        url: '/photos/IMG_2190.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 6,
        url: '/photos/IMG_2191.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 7,
        url: '/photos/IMG_2256.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 8,
        url: '/photos/IMG_2257.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 9,
        url: '/photos/IMG_2192.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 10,
        url: '/photos/IMG_2193.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 11,
        url: '/photos/IMG_2194.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 12,
        url: '/photos/IMG_2195.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 13,
        url: '/photos/IMG_2196.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 14,
        url: '/photos/IMG_2197.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 15,
        url: '/photos/IMG_2198.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 16,
        url: '/photos/IMG_2259.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 17,
        url: '/photos/IMG_2199.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 18,
        url: '/photos/IMG_2200.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 19,
        url: '/photos/IMG_2201.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 20,
        url: '/photos/IMG_2261.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 21,
        url: '/photos/IMG_2202.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 22,
        url: '/photos/IMG_2203.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 23,
        url: '/photos/IMG_2204.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 24,
        url: '/photos/IMG_2258.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 25,
        url: '/photos/IMG_2205.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 26,
        url: '/photos/IMG_2206.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 27,
        url: '/photos/IMG_2207.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 28,
        url: '/photos/IMG_2260.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 29,
        url: '/photos/IMG_2208.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 30,
        url: '/photos/IMG_2209.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 31,
        url: '/photos/photo_2022-02-25_13-09-11.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 32,
        url: '/photos/photo_2022-02-25_13-09-12.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos', null, {
      restartIdentity: true,
      truncate: true,
    });
  },
};
