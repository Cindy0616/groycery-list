const express = require('express')
const app = express()
const port = 3000
const db = require('../database')
const Controller = require('./controllers.js')
const parser = require('body-parser')
const path = require('path');


//app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../client/dist')))





app.get('/api/groceries', (req, res) => {
  Controller.getGroceries(req, res);

});



app.post('/api/groceries', (req, res) => {
  console.log('from server requstboday', req.body)
  Controller.addGroceries(req, res);
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))