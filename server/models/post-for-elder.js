'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postForElderData = new Schema({
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

var postForElder = module.exports = mongoose.model('post_for_elder', postForElderData);
module.exports.getPostForElder = (callback, limit) => {
	postForElder.find(callback).limit(limit);
}

module.exports.getPostForElderById = (id, callback) => {
	postForElder.findById(id, callback);
}

module.exports.addPostForElder = (post, callback) => {
	postForElder.create(post, callback);
}

module.exports.updatePostForElder = (id, post, options, callback) => {
	var query = {_id: id};
	var update = {
		tittle: post.tittle,
        note: post.note,
		img: note.img
	}
	postForElder.findOneAndUpdate(query, update, options, callback);
}

module.exports.removePostForElder = (id, callback) => {
	var query = {_id: id};
	postForElder.remove(query, callback);
}
//mongoimport --db shops --collection shop --file data.json --jsonArray
