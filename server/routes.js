const router = require('express').Router();

const controllers = require('./controllers');

router.post('/items', controllers.items.createItem);

router.get('/items', controllers.items.getItems)

router.get('/items/verify/number', controllers.items.verifyByNumber);

router.get('/items/verify/name', controllers.items.verifyByName);

router.get('/items/:itemId/Id', controllers.items.getItemById);

router.get('/items/:itemName/Name', controllers.items.getItemByName);

router.get('/sets/:setName/name', controllers.sets.searchByName);

router.get('/sets/id', controllers.sets.getSetWithId);

router.get('/sets/verify', controllers.sets.verifyName);

router.post('/sets', controllers.sets.createSet);

router.get('/user', controllers.users.getUser);

router.post('/user', controllers.users.createAUser);

router.get('/users', controllers.users.getUsers);

router.put('/user/role', controllers.users.updateRole);

module.exports = router;