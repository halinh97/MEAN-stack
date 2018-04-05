'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productspData = new Schema({
  name:  {
		type: String,
		required: true
	},
  offer: {
		type: String
	},
  img: {
		type: String,
		required: true
	},
  tag: {
		type: String
	},
  calo: {
		type: String,
		required: true
	},
  checked: {
		type: String
	},
  create_date:{
    type: Date,
    default: Date.now
  }
});

var products = module.exports = mongoose.model('products', productspData);

module.exports.getProduct = (callback, limit) => {
	products.find(callback).limit(limit);
}

module.exports.getProductById = (id, callback) => {
	products.findById(id, callback);
}

module.exports.addProduct = (product, callback) => {
	products.create(product, callback);
}

module.exports.updateProducts = (id, products, options, callback) => {
	var query = {_id: id};
	var update = {
		name: products.name,
		offer: products.offer,
		img: products.img,
		tag: products.tag,
		calo: products.calo
	}
	products.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeProduct = (id, callback) => {
	var query = {_id: id};
	products.remove(query, callback);
}
//mongoimport --db shops --collection shop --file data.json --jsonArray
