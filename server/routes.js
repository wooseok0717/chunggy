const router = require('express').Router();

const controllers = require('./controllers');

router.post('/items', controllers.items.createItem);

router.get('/items/:itemId/Id', controllers.items.getItemById);

router.get('/items/:itemName/Name', controllers.items.getItemByName);

router.get('/sets/:setName/name', controllers.sets.searchByName);

router.post('/sets', controllers.sets.createSet)

module.exports = router;