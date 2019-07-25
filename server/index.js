const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');


const app =express();
app.set('port', (process.env.PORT || 4000));

mongoose.connect('mongodb://localhost:27017/test').then(
  () => {console.info("connected to mongo db ")},
  err => {console.error(err) }
);
mongoose.Promise = global.Promise

app.use(bodyParser.json());

app.listen(app.get('port'), function () {
  console.log('App listening on port ' + app.get('port'));
});


//set routes here 
app.use('/api', require('./routes/user'))
app.use('/product', require('./routes/buns'))
//init app
//build part of the react app
//uncoment this after npm build

//default route
app.use('/', express.static(path.join(__dirname, '../build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});


//err
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message})
});

//port
