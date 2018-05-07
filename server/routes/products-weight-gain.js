
	var express = require('express');
    var router = express.Router();
      var bodyParser = require('body-parser');
    productsWeightGain = require('../models/productsWeightGain');
  
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
      productsWeightGain.getProductsWeightGain((err, productsWeightGain) => {
        if (err) {
                  res.status(555).send(result.fail);
                  res.end();
        }
        res.json(productsWeightGain);
              res.end();
      });
    });
  
    router.get('/:_id', (req, res) => {
      productsWeightGain.getProductsWeightGainById(req.params._id, (err, productsWeightGain) => {
        if (err) {
          throw err;
        }
        res.json(productsWeightGain);
      });
    });
  
    router.post('/', (req, res) => {
      var product = req.body;
      productsWeightGain.addProductsWeightGain(product, (err, product) => {
        if (err) {
          throw err;
        }
        res.json(product);
      });
    });
  
    router.put('/:_id', (req, res) => {
      var id = req.params._id;
      var product = req.body;
      productsWeightGain.updateProductsWeightGain(id, product, {}, (err, product) => {
        if (err) {
          throw err;
        }
        res.json(product);
      });
    });
  
    router.delete('/:_id', (req, res) => {
      var id = req.params._id;
      productsWeightGain.removeBook(id, (err, product) => {
        if (err) {
          throw err;
        }
        res.json(product);
      });
    });
      module.exports = router;
  