const axios = require('axios');

const devUrl = 'http://127.0.0.1:3000';
const proUrl = 'http://54.219.235.85:3000';
const baseURL = devUrl;

module.exports ={
  createSet: (req, res) => {
    const config = {
      method: 'post',
      baseURL,
      url: '/items/set',
      data: req.body
    }
    axios(config)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.send('failed???');
    })
  },
  searchByName: (req, res) => {
    const config = {
      method: 'get',
      baseURL,
      url: `/items/sets/${req.params.setName}`
    }
    axios(config)
    .then(data => {
      res.send(data.data);
    })
    .catch(() => {
      res.send('error');
    })
  },
  verifyName: (req, res) => {
    axios.get(`${baseURL}/items/sets/verify?nameInput=${req.query.nameInput}`)
    .then(data => {
      res.send(data.data)
    })
  },
  getSetWithId: (req, res) => {
    axios.get(`${baseURL}/items/set/id?setId=${req.query.setId}`)
    .then(({data}) => res.send(data));
  },
}