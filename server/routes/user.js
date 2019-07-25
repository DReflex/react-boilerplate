const express= require('express');
var router = express.Router()
const User = require('../models/user');

// get one user 

// apply any middleware here 
function createErrror(error,status){
  return {
    error:error,
    status:status
  }
}

router.get('/user/:id', function(req, res, next){
    console.info(req.params.id)
    User.findOne({username: req.params.id}).then(function(getUser){
      if(!getUser){
        console.log("404");
        res.status(404);
        res.send(createErrror('no error', 404))
      }
      else{
        res.send({
          data:getUser,
          notError:createErrror('no error', 404)
        })
      }
    }).catch(next);
  });
  // create user
  router.post('/user', function(req, res, next){
    console.info("this is post",req.body)
    User.create(req.body).then(function(createUser){
      res.send(createUser);
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