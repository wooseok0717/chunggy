const router = require('express').Router();

router.get('/hello', (req, res) => {
  res.send('hello');
});

module.exports = router;