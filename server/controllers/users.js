const axios = require('axios');

const baseURL = 'http://127.0.0.1:3001';

module.exports = {
  getUser: (req, res) => {
    axios.get(`${baseURL}/users/user?email=${req.query.email}`)
    .then(data => res.send(data.data));
  },
  createAUser: (req, res) => {
    const config = {
      method:'post',
      baseURL,
      url:'/users',
      data: req.body,
    }
    axios(config)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(404);
    })
  }
}