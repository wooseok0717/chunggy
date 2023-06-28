module.exports ={
  createSet: (req, res) => {
    console.log(req.body);
    res.send('hello you just entered a new set info')
  }
}