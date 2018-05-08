
	var express = require('express');
    var router = express.Router();
      var bodyParser = require('body-parser');
    postWeightGain = require('../models/post-weight-gain');
  
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
      postWeightGain.getPostWeightGain((err, postWeightGain) => {
        if (err) {
                  res.status(555).send(result.fail);
                  res.end();
        }
        res.json(postWeightGain);
              res.end();
      });
    });
  
    router.get('/:_id', (req, res) => {
      postWeightGain.getPostWeightGainById(req.params._id, (err, postWeightGain) => {
        if (err) {
          throw err;
        }
        res.json(postWeightGain);
      });
    });
  
    router.post('/', (req, res) => {
      var PostWeightGain = req.body;
      postWeightGain.addPostWeightGain(PostWeightGain, (err, PostWeightGain) => {
        if (err) {
          throw err;
        }
        res.json(PostWeightGain);
      });
    });
  
    router.put('/:_id', (req, res) => {
      var id = req.params._id;
      var PostWeightGain = req.body;
      postWeightGain.updatePostWeightGain(id, PostWeightGain, {}, (err, PostWeightGain) => {
        if (err) {
          throw err;
        }
        res.json(PostWeightGain);
      });
    });
  
    router.delete('/:_id', (req, res) => {
      var id = req.params._id;
      postWeightGain.removeBook(id, (err, PostWeightGain) => {
        if (err) {
          throw err;
        }
        res.json(PostWeightGain);
      });
    });
      module.exports = router;
  