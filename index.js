const express = require('express');

const app = express();


app.listen(process.env.port || 5000, function(){
  console.log('express app now listening requests');
});
