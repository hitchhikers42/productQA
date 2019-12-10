const mongoose = require('mongoose');
const db = require('./index.js');

const QASchema = new mongoose.Schema({
  productId: String,
  name: String,
  posts: []

});

const QA = mongoose.model('QA', QASchema);

module.exports = QA;