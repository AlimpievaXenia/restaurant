const orderRouter = require('express').Router();

orderRouter.get('/', (req, res) => {
  res.render('order');
});

module.exports = orderRouter;
