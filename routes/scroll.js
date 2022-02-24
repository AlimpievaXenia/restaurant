const router = require('express').Router();

const { Category } = require('../db/models');

router.get('/scroll', async (req, res) => {
  const categories = await Category.findAll({ raw: true });
  // console.log('categories >>>', categories);
  res.render('scroll', { categories });
});

module.exports = router;
