
	var express = require('express');
    var router = express.Router();
      var bodyParser = require('body-parser');
    productsForElder = require('../models/products-for-elder');
  
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
      productsForElder.getProductsForElder((err, productsForElder) => {
        if (err) {
                  res.status(555).send(result.fail);
                  res.end();
        }
        res.json(productsForElder);
              res.end();
      });
    });
  
    router.get('/:_id', (req, res) => {
      productsForElder.getProductsForElderById(req.params._id, (err, productsForElder) => {
        if (err) {
          throw err;
        }
        res.json(productsForElder);
      });
    });
  
    router.post('/', (req, res) => {
      var product = req.body;
      productsForElder.addProductsForElder(product, (err, product) => {
        if (err) {
          throw err;
        }
        res.json(product);
      });
    });
  
    router.put('/:_id', (req, res) => {
      var id = req.params._id;
      var product = req.body;
      productsForElder.updateProductsForElder(id, product, {}, (err, product) => {
        if (err) {
          throw err;
        }
        res.json(product);
      });
    });
  
    router.delete('/:_id', (req, res) => {
      var id = req.params._id;
      productsForElder.removeBook(id, (err, product) => {
        if (err) {
          throw err;
        }
        res.json(product);
      });
    });
      module.exports = router;
  