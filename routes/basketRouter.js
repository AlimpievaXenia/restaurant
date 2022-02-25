const basketRouter = require('express').Router();
const {
  BasketItem, Item, Photo,
} = require('../db/models/index');

basketRouter.get('/', async (req, res) => {
  const { userId } = res.locals;

  let itemsToOrder;
  try {
    itemsToOrder = await Item.findAll({
      raw: true,
      include: [
        {
          model: BasketItem,
          where: { userId },
          required: true,
        },
        {
          model: Photo,
          required: true,
        },
      ],
    });

    // const userItemsToOrder = allItemsToOrder
    //   .sort((a, b) => a.id - b.id)
    //   .reduce((acc, el, i, arr) => {
    //     if (i === arr[0]) {
    //       const newEl = { ...el, quantity: 1 };
    //       const newAcc = [...acc, newEl];
    //       return newAcc;
    //     }
    //     const isUnique = el?.id !== arr[i - 1]?.id;
    //     const quantity = arr[i - 1]?.quantity !== undefined ? arr[i - 1]?.quantity : 0;
    //     // console.log();
    //     const newEl = { ...el, quantity: quantity + 1 };

    //     const newAcc = [...acc, newEl];
    //     // eslint-disable-next-line consistent-return
    //     const result = isUnique ? newAcc : acc;
    //     return result;
    //   }, []);

    // console.log(userItemsToOrder);
    res.render('basket', { itemsToOrder });
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
  }
});

module.exports = basketRouter;
