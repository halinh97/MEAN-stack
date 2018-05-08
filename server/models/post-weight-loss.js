'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postWeightLossData = new Schema({
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

var postWeightLoss = module.exports = mongoose.model('post_weight_loss', postWeightLossData);
module.exports.getPostWeightLoss = (callback, limit) => {
	postWeightLoss.find(callback).limit(limit);
}

module.exports.getPostWeightLossById = (id, callback) => {
	postWeightLoss.findById(id, callback);
}

module.exports.addPostWeightLoss = (post, callback) => {
	postWeightLoss.create(post, callback);
}

module.exports.updatePostWeightLoss = (id, post, options, callback) => {
	var query = {_id: id};
	var update = {
		tittle: post.tittle,
        note: post.note,
		img: note.img
	}
	postWeightLoss.findOneAndUpdate(query, update, options, callback);
}

module.exports.removePostWeightLoss = (id, callback) => {
	var query = {_id: id};
	postWeightLoss.remove(query, callback);
}
//mongoimport --db shops --collection shop --file data.json --jsonArray
