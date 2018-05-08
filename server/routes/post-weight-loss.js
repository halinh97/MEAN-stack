
	var express = require('express');
    var router = express.Router();
      var bodyParser = require('body-parser');
    postWeightLoss = require('../models/post-weight-loss');
  
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
      postWeightLoss.getPostWeightLoss((err, postWeightLoss) => {
        if (err) {
                  res.status(555).send(result.fail);
                  res.end();
        }
        res.json(postWeightLoss);
              res.end();
      });
    });
  
    router.get('/:_id', (req, res) => {
      postWeightLoss.getPostWeightLossById(req.params._id, (err, postWeightLoss) => {
        if (err) {
          throw err;
        }
        res.json(postWeightLoss);
      });
    });
  
    router.post('/', (req, res) => {
      var PostWeightLoss = req.body;
      postWeightLoss.addPostWeightLoss(PostWeightLoss, (err, PostWeightLoss) => {
        if (err) {
          throw err;
        }
        res.json(PostWeightLoss);
      });
    });
  
    router.put('/:_id', (req, res) => {
      var id = req.params._id;
      var PostWeightLoss = req.body;
      postWeightLoss.updatePostWeightLoss(id, PostWeightLoss, {}, (err, PostWeightLoss) => {
        if (err) {
          throw err;
        }
        res.json(PostWeightLoss);
      });
    });
  
    router.delete('/:_id', (req, res) => {
      var id = req.params._id;
      postWeightLoss.removeBook(id, (err, PostWeightLoss) => {
        if (err) {
          throw err;
        }
        res.json(PostWeightLoss);
      });
    });
      module.exports = router;
  