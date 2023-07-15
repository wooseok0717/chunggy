const axios = require('axios');

const devUrl = 'http://127.0.0.1:3000';
const proUrl = 'http://54.219.235.85:3000';
const baseURL = devUrl;

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
    axios.get(`${baseURL}/items`, {params: req.query})
    .then(rows => res.send(rows.data));
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
  },
  getBySetId: (req, res) => {
    axios.get(`${baseURL}/items/setItems?setId=${req.query.setId}`)
    .then(({data}) => res.send(data));
  }
}