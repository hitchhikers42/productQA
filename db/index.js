const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/test';
const db = mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
});
module.exports = db;