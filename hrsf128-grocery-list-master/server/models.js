const db = require('../database')
//need to response
const getGroceries = (search, callback) => {
  const q = `SELECT * FROM groceries`;
  db.query(q, (err, groceries) => {
    console.log('from model get request receive')
    if (err){
      callback(err, null);
    } else {
      console.log('success!!!!!!')
      callback(null, groceries);
    }
  })
}



const addGroceries = (item, quantity, callback) => {
  const queryStr = `INSERT INTO groceries (item, quantity) VALUES ('${item}', '${quantity}')`;

  db.query(queryStr, (err, groceries) => {
    if (err){
      callback(err, null);
    } else {
      callback(null, groceries);
    }
  });
}


// addGroceries('cake', 1, (err,  data) => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })



module.exports = {
  getGroceries,
  addGroceries
}
