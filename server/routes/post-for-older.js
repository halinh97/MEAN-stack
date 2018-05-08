
	var express = require('express');
    var router = express.Router();
      var bodyParser = require('body-parser');
    postForOlder = require('../models/post-for-older');
  
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
      postForOlder.getPostForOlder((err, postForOlder) => {
        if (err) {
                  res.status(555).send(result.fail);
                  res.end();
        }
        res.json(postForOlder);
              res.end();
      });
    });
  
    router.get('/:_id', (req, res) => {
      postForOlder.getPostForOlderById(req.params._id, (err, postForOlder) => {
        if (err) {
          throw err;
        }
        res.json(postForOlder);
      });
    });
  
    router.post('/', (req, res) => {
      var PostForOlder = req.body;
      postForOlder.addPostForOlder(PostForOlder, (err, PostForOlder) => {
        if (err) {
          throw err;
        }
        res.json(PostForOlder);
      });
    });
  
    router.put('/:_id', (req, res) => {
      var id = req.params._id;
      var PostForOlder = req.body;
      postForOlder.updatePostForOlder(id, PostForOlder, {}, (err, PostForOlder) => {
        if (err) {
          throw err;
        }
        res.json(PostForOlder);
      });
    });
  
    router.delete('/:_id', (req, res) => {
      var id = req.params._id;
      postForOlder.removeBook(id, (err, PostForOlder) => {
        if (err) {
          throw err;
        }
        res.json(PostForOlder);
      });
    });
      module.exports = router;
  