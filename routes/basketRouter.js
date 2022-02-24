const express = require('express');
const { noSessionChecker } = require('../middlewares/auth');
const { Item, BasketItem } = require('../db/models/index');

const router = express.Router();

router.post('/addtoBasket', noSessionChecker, async (req, res) => {
  const itemId = req.body.id;
  // console.log(itemId);

  let item;
  try {
    item = await Item.findOne({
      raw: true,
      where: {
        id: itemId,
      },
    });
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
    return;
  }
  // console.log(item);
  console.log('====================>', res.locals.userId);

  let basketItem;
  try {
    basketItem = await BasketItem.create(
      {
        itemId,
        userId: res.locals.userId,
      },
    );
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
    return;
  }

  let all;
  try {
    basketItem = await BasketItem.create(
      {
        itemId,
        userId: res.locals.userId,
      },
    );
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
    return;
  }



  res.json({ basketItem });
});

router.delete('/removeFrBasket', noSessionChecker, async (req, res) => {
  const basketItemId = req.body.id;
  try {
    await BasketItem.destroy({ where: { id: basketItemId } });
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
  }

  res.json({ deleted: 'deleted' });
});



module.exports = router;
