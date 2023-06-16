const router = require('express').Router();

const controllers = require('./controllers');

router.get('/hello', (req, res) => {
  res.send('hello');
});

router.get('/items/:itemId/Id', controllers.getItemById);

router.get('/items/:itemName/Name', controllers.getItemByName);

router.post('/items', (req, res) => {
  console.log(req.body)
  res.send('arrived');
})

module.exports = router;