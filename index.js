const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routers = require('./routers');
const mongoose = require('mongoose');

//mongodb connection
mongoose.connect('mongodb://localhost:27017/mobile-legends-heroes');
mongoose.Promise = global.Promise;

//initialize body-parser
app.use(bodyParser.json());

//initialize routers
app.use('/api', routers);

app.listen(process.env.port || 5000, function(){
  console.log('express app now listening requests');
});
