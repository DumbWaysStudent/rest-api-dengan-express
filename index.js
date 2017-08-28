const express = require('express');

const app = express();

app.get('/api/students', function(req, res){
  console.log('this is homepage');
  res.send({
    name: "Ega Radiegtya",
    age: 27
  })
});

app.listen(process.env.port || 5000, function(){
  console.log('express app now listening requests');
});
