'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [
      {
        itemId: 1,
        url: './photos/IMG_1973.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 2,
        url: './photos/IMG_1974.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 3,
        url: './photos/IMG_1975.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 4,
        url: './photos/IMG_1978.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 5,
        url: './photos/IMG_1981.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 6,
        url: './photos/IMG_1980.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 7,
        url: './photos/IMG_1983.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 8,
        url: './photos/IMG_1979.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 9,
        url: './photos/IMG_1985.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 10,
        url: './photos/IMG_1976.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 11,
        url: './photos/IMG_1977.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 12,
        url: './photos/IMG_1986.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 13,
        url: './photos/IMG_1982.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 14,
        url: './photos/IMG_1984.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 15,
        url: './photos/IMG_2001.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 16,
        url: './photos/IMG_1999.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 17,
        url: './photos/IMG_2002.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 18,
        url: './photos/IMG_1995.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 19,
        url: './photos/IMG_1997.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 20,
        url: './photos/IMG_2003.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 21,
        url: './photos/IMG_1994.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: 22,
        url: './photos/IMG_1993.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos',null, {restartIdentity:true, truncate:true});
  },
};
