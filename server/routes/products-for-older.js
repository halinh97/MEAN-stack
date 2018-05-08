
	var express = require('express');
    var router = express.Router();
      var bodyParser = require('body-parser');
    productsForOlder = require('../models/products-for-older');
  
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
      productsForOlder.getProductsForOlder((err, productsForOlder) => {
        if (err) {
                  res.status(555).send(result.fail);
                  res.end();
        }
        res.json(productsForOlder);
              res.end();
      });
    });
  
    router.get('/:_id', (req, res) => {
      productsForOlder.getProductsForOlderById(req.params._id, (err, productsForOlder) => {
        if (err) {
          throw err;
        }
        res.json(productsForOlder);
      });
    });
  
    router.post('/', (req, res) => {
      var product = req.body;
      productsForOlder.addProductsForOlder(product, (err, product) => {
        if (err) {
          throw err;
        }
        res.json(product);
      });
    });
  
    router.put('/:_id', (req, res) => {
      var id = req.params._id;
      var product = req.body;
      productsForOlder.updateProductsForOlder(id, product, {}, (err, product) => {
        if (err) {
          throw err;
        }
        res.json(product);
      });
    });
  
    router.delete('/:_id', (req, res) => {
      var id = req.params._id;
      productsForOlder.removeBook(id, (err, product) => {
        if (err) {
          throw err;
        }
        res.json(product);
      });
    });
      module.exports = router;
  