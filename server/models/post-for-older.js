'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postForOlderData = new Schema({
    tittle: {
		type: String,
		required: true
    },
    note: {
        type: String,
		required: true
    },
    img: {
		type: String,
		required: true
	},
    create_date : {
    type: Date,
    default: Date.now
  }
});

var postForOlder = module.exports = mongoose.model('post_for_older', postForOlderData);
module.exports.getPostForOlder = (callback, limit) => {
	postForOlder.find(callback).limit(limit);
}

module.exports.getPostForOlderById = (id, callback) => {
	postForOlder.findById(id, callback);
}

module.exports.addPostForOlder = (post, callback) => {
	postForOlder.create(post, callback);
}

module.exports.updatePostForOlder = (id, post, options, callback) => {
	var query = {_id: id};
	var update = {
		tittle: post.tittle,
        note: post.note,
		img: note.img
	}
	postForOlder.findOneAndUpdate(query, update, options, callback);
}

module.exports.removePostForOlder = (id, callback) => {
	var query = {_id: id};
	postForOlder.remove(query, callback);
}
//mongoimport --db shops --collection shop --file data.json --jsonArray
