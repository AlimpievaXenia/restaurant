const basketRouter = require('express').Router();

basketRouter.get('/', (req, res) => {
  res.render('basket');
});

module.exports = basketRouter;
