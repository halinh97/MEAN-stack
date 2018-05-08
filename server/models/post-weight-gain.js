'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postWeightGainData = new Schema({
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

var postWeightGain = module.exports = mongoose.model('post_weight_gain', postWeightGainData);
module.exports.getPostWeightGain = (callback, limit) => {
	postWeightGain.find(callback).limit(limit);
}

module.exports.getPostWeightGainById = (id, callback) => {
	postWeightGain.findById(id, callback);
}

module.exports.addPostWeightGain = (post, callback) => {
	postWeightGain.create(post, callback);
}

module.exports.updatePostWeightGain = (id, post, options, callback) => {
	var query = {_id: id};
	var update = {
		tittle: post.tittle,
        note: post.note,
		img: note.img
	}
	postWeightGain.findOneAndUpdate(query, update, options, callback);
}

module.exports.removePostWeightGain = (id, callback) => {
	var query = {_id: id};
	postWeightGain.remove(query, callback);
}
//mongoimport --db shops --collection shop --file data.json --jsonArray
