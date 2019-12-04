const mongoose = require('mongoose');
const db = require('./index.js');

const QASchema = new mongoose.Schema({
  productId: String,
  name: String,
  posts: {
    question: String,
    answer: String
  }

});

const QA = mongoose.model('QA', QASchema);

module.exports = QA;