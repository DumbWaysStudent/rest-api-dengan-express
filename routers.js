const express = require('express');
const router = express.Router();

router.get('/heroes', function(req, res){
  res.send('GET heroes');
});

router.post('/heroes', function(req, res){
  res.send('POST hero');
});

router.put('/heroes/:id', function(req, res){
  res.send('PUT hero');
});

router.delete('/heroes/:id', function(req, res){
  res.send('DELETE heroes');
});

module.exports = router;
