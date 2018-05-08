'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productsForOlderData = new Schema({
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

var productsForOlder = module.exports = mongoose.model('products_for_older', productsForOlderData);

module.exports.getProductForOlder = (callback, limit) => {
	productsForOlder.find(callback).limit(limit);
}

module.exports.getProductForOlderById = (id, callback) => {
	productsForOlder.findById(id, callback);
}

module.exports.addForOlder = (product, callback) => {
	productsForOlder.create(product, callback);
}

module.exports.updateproductsForOlder = (id, product, options, callback) => {
	var query = {_id: id};
	var update = {
		name: product.name,
		offer: product.offer,
		img: product.img,
		tag: product.tag,
		calo: product.calo
	}
	productsForOlder.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeProductForOlder = (id, callback) => {
	var query = {_id: id};
	productsForOlder.remove(query, callback);
}
//mongoimport --db shops --collection shop --file data.json --jsonArray
