const express = require('express');
const { noSessionChecker } = require('../middlewares/auth');
const { Item, BasketItem } = require('../db/models/index');

const router = express.Router();

router.post('/addtoBasket', noSessionChecker, async (req, res) => {
  const { itemId } = req.body;
  const { userId } = res.locals;

  // let item;
  // try {
  //   item = await Item.findOne({
  //     raw: true,
  //     where: {
  //       id: itemId,
  //     },
  //   });
  // } catch (error) {
  //   res
  //     .status(500)
  //     .render('error', { error: error.message });
  //   return;
  // }

  try {
    const basketItem = await BasketItem.create(
      {
        itemId,
        userId,
      },
    );
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
    return;
  }

  try {
    const count = await BasketItem.count(
      {
        where: {
          itemId,
          userId,
        },
      },
    );
    res.json({ count });
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
  }
});

router.delete('/removeFrBasket', noSessionChecker, async (req, res) => {
  const itemId = req.body.id;
  const { userId } = res.locals;
  let oneItem;
  try {
    oneItem = await BasketItem.findOne({
      where: {
        userId,
        itemId,
      },
    });
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
  }

  try {
    await BasketItem.destroy({
      where: {
        id: oneItem.id,
      },
    });
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
  }

  try {
    const count = await BasketItem.count(
      {
        where: {
          itemId,
          userId,
        },
      },
    );
    res.json({ count });
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
  }
});

router.post('/basket/addOne', async (req, res) => {
  const itemId = req.body.id;
  const { userId } = res.locals;
  try {
    const basketItem = await BasketItem.create(
      {
        itemId,
        userId,
      },
    );
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
  }

  try {
    const count = await BasketItem.count(
      {
        where: {
          itemId,
          userId,
        },
      },
    );
    res.json({ count });
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
  }
});

module.exports = router;
