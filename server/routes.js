const router = require('express').Router();

const controllers = require('./controllers');

router.post('/items', controllers.items.createItem);

router.get('/items/:itemId/Id', controllers.items.getItemById);

router.get('/items/:itemName/Name', controllers.items.getItemByName);

router.get('/set/:setName', (req, res) => {
  console.log(req.params.setName);
  res.send(['anuhart ranger set', 'anuhart assassin set', 'anuhart templar set', 'anuhart gladiator set', 'anuhart chanter set', 'anuhart cleric set', 'anuhart sorcerer set', 'anuhart spiritmaster set'])
})

router.post('/sets', controllers.sets.createSet)

module.exports = router;