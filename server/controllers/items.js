const axios = require('axios');

const baseURL = 'http://127.0.0.1:3000'

module.exports ={
  getItemById: (req, res) => {
    const config = {
      method: 'get',
      baseURL,
      url: `/items/number/?itemNumber=${req.params.itemId}`
    }
    axios(config)
    .then(() => {
      res.send('item exists!!')
    })
    .catch(() => {
      res.send('item doesnt exist!')
    })
  },
  getItemByName: (req, res) => {
    const config = {
      method: 'get',
      baseURL,
      url: `/items/name/?itemName=${req.params.itemName}`
    }
    axios(config)
    .then(() => {
      res.send('item exists!!')
    })
    .catch(() => {
      res.send('item doesnt exist!')
    })
  },
  getItems: (req, res) => {
    console.log(req.query);
    axios.get(`${baseURL}/items`, {params: req.query})
    res.send('hello');
  },
  createItem: (req, res) => {
    const config = {
      method:'post',
      baseURL,
      url:'/items',
      data: req.body,
    }
    axios(config)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(404);
    })
  },
  verifyByNumber: (req, res) => {
    axios.get(`${baseURL}/items/verify/number`, {params: {number: req.query.number}})
    .then(data => {
      res.send(data.data)
    })
  },
  verifyByName: (req, res) => {
    axios.get(`${baseURL}/items/verify/name`, {params: {name: req.query.name}})
    .then(data => {
      res.send(data.data)
    })
  }
}