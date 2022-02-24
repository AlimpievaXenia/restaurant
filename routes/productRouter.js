const productRouter = require('express').Router();

productRouter.get('/', (req, res) => {
  res.render('product_card');
});

module.exports = productRouter;
