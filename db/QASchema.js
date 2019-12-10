const mongoose = require('mongoose');
const db = require('./index.js');

const QASchema = new mongoose.Schema({
  productId: String,
  questions: []


});

const QA = mongoose.model('QA', QASchema);

module.exports = QA;