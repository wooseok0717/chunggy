const router = require('express').Router();

const controllers = require('./controllers');

router.get('/hello', (req, res) => {
  res.send('hello');
});

router.get('/items/:itemId', controllers.getItemById);

module.exports = router;