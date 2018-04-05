
	var express = require('express');
  var router = express.Router();
	var bodyParser = require('body-parser');
  products = require('../models/products');

	var result = {
	    success: {
	        result: 'Successful'
	    },
	    fail: {
	        result: 'Failed',
	        reason: 'None'
	    }
	}

  router.get('/', (req, res) => {
    products.getProduct((err, products) => {
      if (err) {
				res.status(555).send(result.fail);
				res.end();
      }
      res.json(products);
			res.end();
    });
  });

  router.get('/:_id', (req, res) => {
    products.getProductById(req.params._id, (err, products) => {
      if (err) {
        throw err;
      }
      res.json(products);
    });
  });

  router.post('/', (req, res) => {
    var product = req.body;
    products.addProduct(product, (err, product) => {
      if (err) {
        throw err;
      }
      res.json(product);
    });
  });

  router.put('/:_id', (req, res) => {
    var id = req.params._id;
    var product = req.body;
    products.updateProduct(id, product, {}, (err, product) => {
      if (err) {
        throw err;
      }
      res.json(product);
    });
  });

  router.delete('/:_id', (req, res) => {
    var id = req.params._id;
    products.removeBook(id, (err, product) => {
      if (err) {
        throw err;
      }
      res.json(product);
    });
  });
	module.exports = router;
