const express= require('express');
var router = express.Router()
const Buns = require('../models/buns');

// get one user 

// apply any middleware here 
function createErrror(error,status){
  return {
    error:error,
    status:status
  }
}

router.get('/buns', function(req, res, next){
    
    Buns.find({}).then(function(getBuns){
      if(getBuns.length == 0){
        console.log("404");
        res.status(404);
        res.send(createErrror('no error', 404))
      }
      else{
        res.send({
          data:getBuns,
        })
      }
    }).catch(next);
  });
  // create user
  router.post('/buns', function(req, res, next){
    console.info("this is post",req.body)
    Buns.create(req.body).then(function(data){
      res.send(data);
    }).catch(next)
  });
// update user
router.put('/user/:id', function(req, res, next){
    console.info("creating user from", req.body)
      User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
          User.findOne({_id: req.params.id}).then(function(updatedUser){
              res.send(updatedUser);
          });
      }).catch(next);
  });

  module.exports =  router;