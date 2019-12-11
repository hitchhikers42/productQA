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

// Send a GET request using Express

app.get('/questions', (req, res) => {
  // res.status(200).send('request to the server was succesful')
    QA.find( {}, (error, results) => {
    console.log('SENDING --> ', results)
    res.send(results)
  })

})




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