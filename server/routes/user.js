
	var express = require('express');
    var router = express.Router();
      var bodyParser = require('body-parser');
    users = require('../models/users');
  
      var result = {
          success: {
              result: 'Successful'
          },
          fail: {
              result: 'Failed',
              reason: 'None'
          }
      }
  
    router.get('/', (req, res)=> {
        res.json({ok: "ok"});
        res.end();
    });
    router.post('/login', (req, res)=> {
        users.getUser(req.body, (err, user)=>{
            if(err) {
                res.end();
                res.json(result.fail);
            }
            res.json(user);
				res.end();
          });
      });
      router.post('/register', (req, res)=> {
        //   res.json(req.body);
        //   res.end();
        users.addUser(req.body, (err, user)=>{
          if(err) {
              res.json(result.fail);
              res.end();
          }
          res.json(user);
              res.end();
        });
    });
      module.exports = router;
  