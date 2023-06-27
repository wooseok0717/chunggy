const axios = require('axios');

module.exports ={
  getItemById: (req, res) => {
    // dummy code
    // console.log(typeof(req.params.itemId))
    if (req.params.itemId !== '1234') {
      res.status(404).send(`doesn't exist`);
    } else {
      res.status(200).send({itemNumber: 1234, itemName: 'chunggy dagger'})
    }
    // actual code
    // res.status(200).send(req.params.itemId)
  },
  getItemByName: (req, res) => {
    console.log(req.params.itemName)
    if (req.params.itemName !== 'chunggy dagger') {
      res.status(404).send(`doesn't exist`);
    } else {
      res.status(200).send({itemNumber: 1234, itemName: 'chunggy dagger'})
    }
  },
  createItem: (req, res) => {
    axios.post('http://127.0.0.1:3000/items', req.body)
    res.send('arrived');
  },
}