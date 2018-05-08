
	var express = require('express');
    var router = express.Router();
      var bodyParser = require('body-parser');
    productsWeightLoss = require('../models/products-weight-loss');
  
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
      productsWeightLoss.getProductsWeightLoss((err, productsWeightLoss) => {
        if (err) {
                  res.status(555).send(result.fail);
                  res.end();
        }
        res.json(productsWeightLoss);
              res.end();
      });
    });
  
    router.get('/:_id', (req, res) => {
      productsWeightLoss.getProductsWeightLossById(req.params._id, (err, productsWeightLoss) => {
        if (err) {
          throw err;
        }
        res.json(productsWeightLoss);
      });
    });
  
    router.post('/', (req, res) => {
      var product = req.body;
      productsWeightLoss.addProductsWeightLoss(product, (err, product) => {
        if (err) {
          throw err;
        }
        res.json(product);
      });
    });
  
    router.put('/:_id', (req, res) => {
      var id = req.params._id;
      var product = req.body;
      productsWeightLoss.updateProductsWeightLoss(id, product, {}, (err, product) => {
        if (err) {
          throw err;
        }
        res.json(product);
      });
    });
  
    router.delete('/:_id', (req, res) => {
      var id = req.params._id;
      productsWeightLoss.removeBook(id, (err, product) => {
        if (err) {
          throw err;
        }
        res.json(product);
      });
    });
      module.exports = router;
  