
	var express = require('express');
    var router = express.Router();
      var bodyParser = require('body-parser');
    postDoYouKnow = require('../models/do-you-know');
  
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
      postDoYouKnow.getPostDoYouKnow((err, postDoYouKnow) => {
        if (err) {
                  res.status(555).send(result.fail);
                  res.end();
        }
        res.json(postDoYouKnow);
              res.end();
      });
    });
  
    router.get('/:_id', (req, res) => {
      postDoYouKnow.getPostDoYouKnowById(req.params._id, (err, postDoYouKnow) => {
        if (err) {
          throw err;
        }
        res.json(postDoYouKnow);
      });
    });
  
    router.post('/', (req, res) => {
      var PostDoYouKnow = req.body;
      postDoYouKnow.addPostDoYouKnow(PostDoYouKnow, (err, PostDoYouKnow) => {
        if (err) {
          throw err;
        }
        res.json(PostDoYouKnow);
      });
    });
  
    router.put('/:_id', (req, res) => {
      var id = req.params._id;
      var PostDoYouKnows = req.body;
      postDoYouKnow.updatePostDoYouKnow(id, PostDoYouKnows, {}, (err, PostDoYouKnows) => {
        if (err) {
          throw err;
        }
        res.json(PostDoYouKnows);
      });
    });
  
    router.delete('/:_id', (req, res) => {
      var id = req.params._id;
      postDoYouKnow.removeBook(id, (err, PostDoYouKnow) => {
        if (err) {
          throw err;
        }
        res.json(PostDoYouKnow);
      });
    });
      module.exports = router;
  