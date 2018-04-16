'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersData = new Schema({
  username:  {
		type: String,
		required: true
	},
  password: {
      type: String,
      required: true
  }
});

var users = module.exports = mongoose.model('users', usersData);

module.exports.getUser = (user, callback) => {
	users.findOne({username: user.username, password: user.password}, function(err, user) {
    callback(err, user);
  });
}

module.exports.addUser = (user, callback) => {
	users.create(user, function(err, user) {
    callback(err, user);
  });

}
// module.exports.removeProduct = (id, callback) => {
// 	var query = {_id: id};
// 	products.remove(query, callback);
// }
//mongoimport --db shops --collection shop --file data.json --jsonArray
