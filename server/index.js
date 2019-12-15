//do a GET request here to QUERY the db

const axios = require('axios');
const QA = require('../db/QASchema.js');
const mongoose = require('mongoose');
const express = require('express')
const app = express();


const port = process.env.PORT || 3030

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'))

//generate productIds from 1 - 100.
const generateProductIds = () => {
  let productIds = [];

  for (var value = 1; value <= 100; value++) {
    productIds.push(`${value}`);
  }

  return productIds;
}


//
/* returns a random number between 0 and given 'num' */
const random = (num) =>
  Math.floor((Math.random() * num) + 1);

const randomNumber = random(100)

// console.log(randomNumber)

// Send a GET request using Express


app.get('/questions/:productId', (req, res) => {
const { productId } = req.params
  // res.status(200).send('request to the server was succesful')
    QA.find( { productId: productId.toString() }, (error, results) => {
    console.log('SENDING --> ', results)
    // res.send(req.params)
    console.log(error)
    res.send(results)

  })

  // app.get('/users/:userId/books/:bookId', function (req, res) {
  //   res.send(req.params)
  // })

})

// named john and at least 18
// MyModel.find({ name: 'john', age: { $gte: 18 }});


app.listen(port, () => {
  console.log('server is listening on port ' + port)
})


// axios({
//   method: 'get',
//   url: 'https://reqres.in/api/users',
//   data: {
//     name: 'Jane',
//     country: 'Canada'
//   }
// })

//! find out why pathway isn't working
// const listUsers = async () => {
//   try {
//     const res = await axios.get('../db/index.js');
//     console.log(res.data)
//   } catch (err) {
//     console.error(err);
//   }
// };

// listUsers();

// const listUsers = async () => {
//   try {
//     const res = await axios.get('https://reqres.in/api/users');
//     console.log(res.data.data)
//   } catch (err) {
//     console.error(err);
//   }
// };

// listUsers();