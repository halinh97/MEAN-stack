
	var express = require('express');
    var router = express.Router();
      var bodyParser = require('body-parser');
    postForElder = require('../models/post-for-elder');
  
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
      postForElder.getPostForElder((err, postForElder) => {
        if (err) {
                  res.status(555).send(result.fail);
                  res.end();
        }
        res.json(postForElder);
              res.end();
      });
    });
  
    router.get('/:_id', (req, res) => {
      postForElder.getPostForElderById(req.params._id, (err, postForElder) => {
        if (err) {
          throw err;
        }
        res.json(postForElder);
      });
    });
  
    router.post('/', (req, res) => {
      var PostForElder = req.body;
      postForElder.addPostForElder(PostForElder, (err, PostForElder) => {
        if (err) {
          throw err;
        }
        res.json(PostForElder);
      });
    });
  
    router.put('/:_id', (req, res) => {
      var id = req.params._id;
      var PostForElder = req.body;
      postForElder.updatePostForElder(id, PostForElder, {}, (err, PostForElder) => {
        if (err) {
          throw err;
        }
        res.json(PostForElder);
      });
    });
  
    router.delete('/:_id', (req, res) => {
      var id = req.params._id;
      postForElder.removeBook(id, (err, PostForElder) => {
        if (err) {
          throw err;
        }
        res.json(PostForElder);
      });
    });
      module.exports = router;
  