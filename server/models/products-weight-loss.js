'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productsWeightLossData = new Schema({
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

var productsWeightLoss = module.exports = mongoose.model('products_weight_loss', productsWeightLossData);

module.exports.getProductWeightLoss = (callback, limit) => {
	productsWeightLoss.find(callback).limit(limit);
}

module.exports.getProductWeightLossById = (id, callback) => {
	productsWeightLoss.findById(id, callback);
}

module.exports.addWeightLoss = (product, callback) => {
	productsWeightLoss.create(product, callback);
}

module.exports.updateproductsWeightLoss = (id, product, options, callback) => {
	var query = {_id: id};
	var update = {
		name: product.name,
		offer: product.offer,
		img: product.img,
		tag: product.tag,
		calo: product.calo
	}
	productsWeightLoss.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeProductWeightLoss = (id, callback) => {
	var query = {_id: id};
	productsWeightLoss.remove(query, callback);
}
//mongoimport --db shops --collection shop --file data.json --jsonArray
