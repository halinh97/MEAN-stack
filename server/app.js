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
var nutrion = require('./routes/nutrition');
var nutrionForElder = require('./routes/nutrition-for-elder');
var nutrionForOlder = require('./routes/nutrition-for-older');
var weightGain = require('./routes/weight-gain');
var weightLoss = require('./routes/weight-loss');
var user = require('./routes/user');
var index = require('./routes/index');

app.use('/', index);
app.use('/api/products', product);
app.use('/api/do-you-know', postDoYouKnow);
app.use('/api/nutrition', nutrition);
app.use('/api/nutrition-for-elder', nutritionForElder);
app.use('/api/nutrition-for-older', nutritionForOlder);
app.use('/api/weight-gain', weightGain);
app.use('/api/nutrition-loss', weightLoss);
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
