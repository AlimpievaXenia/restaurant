const productRouter = require('express').Router();

productRouter.get('/', (req, res) => {
  // console.log(req.params);
  // const productId = req.params.id;
  res.render('product_card');
});

module.exports = productRouter;
