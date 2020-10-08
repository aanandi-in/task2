
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/task2';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;
