const express = require('express');

const app = express();
const routers = require('./routers');

app.use('/api', routers);

app.listen(process.env.port || 5000, function(){
  console.log('express app now listening requests');
});
