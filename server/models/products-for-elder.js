'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productsForElderData = new Schema({
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

var productsForElder = module.exports = mongoose.model('products_for_elder', productsForElderData);

module.exports.getProductForElder = (callback, limit) => {
	productsForElder.find(callback).limit(limit);
}

module.exports.getProductForElderById = (id, callback) => {
	productsForElder.findById(id, callback);
}

module.exports.addForElder = (product, callback) => {
	productsForElder.create(product, callback);
}

module.exports.updateproductsForElder = (id, product, options, callback) => {
	var query = {_id: id};
	var update = {
		name: product.name,
		offer: product.offer,
		img: product.img,
		tag: product.tag,
		calo: product.calo
	}
	productsForElder.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeProductForElder = (id, callback) => {
	var query = {_id: id};
	productsForElder.remove(query, callback);
}
//mongoimport --db shops --collection shop --file data.json --jsonArray
