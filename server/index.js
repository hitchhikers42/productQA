//do a GET request here to QUERY the db

const axios = require('axios');

// Send a GET request

axios({
  method: 'get',
  url: 'https://reqres.in/api/users',
  data: {
    name: 'Jane',
    country: 'Canada'
  }
})

//! find out why pathway isn't working
// const listUsers = async () => {
//   try {
//     const res = await axios.get('./seed.js');
//     console.log(res.data)
//   } catch (err) {
//     console.error(err);
//   }
// };

// listUsers();

const listUsers = async () => {
  try {
    const res = await axios.get('https://reqres.in/api/users');
    console.log(res.data.data)
  } catch (err) {
    console.error(err);
  }
};

listUsers();

