const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;

router.get('/basket', (req, res) => {
  res.render('basket');
});
