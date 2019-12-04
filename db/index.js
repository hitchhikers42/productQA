const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/tests';
const db = mongoose.connect(mongoUri);
module.exports = db;