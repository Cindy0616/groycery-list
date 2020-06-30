const Model = require('./models.js');


const getGroceries = (req, res) => {
  const search = req.query.search || '';

  Model.getGroceries(search, (err, data) => {
    console.log('from controller get request receive')
    if (err) {
      console.log(err)
      res.status(400).send(err);
    } else {
      console.log(data)
      res.send(data);
    }
  })
}


const addGroceries = (req, res) => {
  const { item, quantity } = req.body;

  Model.addGroceries(item, quantity, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(req.body);
    }
  })
}



module.exports = {
  getGroceries,
  addGroceries
}




