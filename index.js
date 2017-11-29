require('./config/config');

const express = require('express')
const bodyParser = require('body-parser') 
const app = express()

var {mongoose}= require('./db/mongoose');
var {Kit}= require('./models/kit')

app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  let success=(kit)=>{
    res.send({kit})
  }
  let failure=(e) => {
    res.status(400).send({e})
  }

  Kit.find({}).then(success, failure)
})

app.post('/', (req, res)=>{
  var kit = new Kit({
    name: req.body.name,
    checkedIn: req.body.checkedIn
  })

  kit.save().then((doc)=>{
    res.send(doc)
  },(e) => {
    res.status(400).send({e})
  })
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})
