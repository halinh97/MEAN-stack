var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');


products = require('./models/products');
users = require('./models/users');
app.use(express.static(path.join(__dirname, '../')));
app.use(bodyParser.json());

var product = require('./routes/product');
var postDoYouKnow = require('./routes/do-you-know');
// var nutrion = require('./routes/nutrition');
var postForElder = require('./routes/post-for-elder');
var postForOlder = require('./routes/post-for-older');
var postWeightGain = require('./routes/post-weight-gain');
var postWeightLoss = require('./routes/post-weight-loss');
var productsForElder = require('./routes/products-for-elder');
var productsForOlder = require('./routes/products-for-older');
var productsWeightGain = require('./routes/products-weight-gain');
var productsWeightLoss = require('./routes/products-weight-loss');
var user = require('./routes/user');
var index = require('./routes/index');

app.use('/', index);
app.use('/api/products', product);
app.use('/api/do-you-know', postDoYouKnow);
// app.use('/api/nutrition', nutrition);
app.use('/api/nutrition-for-elder', postForElder);
app.use('/api/nutrition-for-older', postForOlder);
app.use('/api/weight-gain', postWeightGain);
app.use('/api/weight-loss', postWeightLoss);
app.use('/api/nutrition-for-elder', productsForElder);
app.use('/api/nutrition-for-older', productsForOlder);
app.use('/api/weight-gain', productsWeightGain);
app.use('/api/weight-loss', productsWeightLoss);
app.use('/api/user', user);


mongoose.connect('mongodb://localhost/shops');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error: '));
db.once('open', function() {
  console.log('DB connection success! ');
});
app.listen(4000);
console.log('Running on port 4000...');
module.exports = app;
