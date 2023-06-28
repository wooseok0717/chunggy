const axios = require('axios');

const baseURL = 'http://127.0.0.1:3000';

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
  }
}