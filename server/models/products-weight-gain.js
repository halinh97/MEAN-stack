'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productsWeightGainData = new Schema({
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

var productsWeight = module.exports = mongoose.model('products_weight_gain', productsWeidhtGainData);

module.exports.getProductWeightGain = (callback, limit) => {
	productsWeightGain.find(callback).limit(limit);
}

module.exports.getProductWeightGainById = (id, callback) => {
	productsWeightGain.findById(id, callback);
}

module.exports.addWeightGain = (product, callback) => {
	productsWeightGain.create(product, callback);
}

module.exports.updateproductsWeightGain = (id, product, options, callback) => {
	var query = {_id: id};
	var update = {
		name: product.name,
		offer: product.offer,
		img: product.img,
		tag: product.tag,
		calo: product.calo
	}
	productsWeightGain.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeProductWeightGain = (id, callback) => {
	var query = {_id: id};
	productsWeightGain.remove(query, callback);
}
//mongoimport --db shops --collection shop --file data.json --jsonArray
