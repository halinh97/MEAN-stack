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
var user = require('./routes/user');
var index = require('./routes/index');

app.use('/', index);
app.use('/api/products', product);
app.use('/api/user', user);


mongoose.connect('mongodb://localhost/shops');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error: '));
db.once('open', function() {
  console.log('DB connection success! ');
});
app.listen(3000);
console.log('Running on port 3000...');
module.exports = app;
