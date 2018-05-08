'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postDoYouKnowData = new Schema({
    tittle: {
			type: String,
			required: true
    },
    note: {
      type: String,
			required: true
    },
    img: {
			type: String
			// required: true
	},
    create_date : {
    	type: Date,
    	default: Date.now
  }
});

var postDoYouKnow = module.exports = mongoose.model('post_do_you_know', postDoYouKnowData);
module.exports.getPostDoYouKnow = (callback, limit) => {
	postDoYouKnow.find(callback).limit(limit);
}

module.exports.getPostDoYouKnowById = (id, callback) => {
	postDoYouKnow.findById(id, callback);
}

module.exports.addPostDoYouKnow = (post, callback) => {
	postDoYouKnow.create(post, callback);
}

module.exports.updatePostDoYouKnow = (id, post, options, callback) => {
	var query = {_id: id};
	var update = {
		tittle: post.tittle,
        note: post.note,
		img: note.img
	}
	postDoYouKnow.findOneAndUpdate(query, update, options, callback);
}

module.exports.removePostDoYouKnow = (id, callback) => {
	var query = {_id: id};
	postDoYouKnow.remove(query, callback);
}
//mongoimport --db shops --collection shop --file data.json --jsonArray
