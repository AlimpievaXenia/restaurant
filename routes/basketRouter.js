const basketRouter = require('express').Router();
const { BasketItem } = require('../db/models/index');

basketRouter.get('/', async (req, res) => {
  const { userId } = res.locals;

  let itemsToOrder;
  try {
    itemsToOrder = await BasketItem.findAll({
      raw: true,
      where: {
        userId,
      },
    });
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
  }

  res.render('basket', { itemsToOrder });
});

module.exports = basketRouter;
