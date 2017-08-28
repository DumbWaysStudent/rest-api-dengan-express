const express = require('express');
const router = express.Router();
const Heroes = require('./models/heroes');

router.get('/heroes', function(req, res){
  res.send('GET heroes');
});

router.post('/heroes', function(req, res, next){
  const {name, role} = req.body;

  //save to mongodb
  Heroes.create(req.body)
    .then(function(result){
      res.send(result);
    })
    .catch(next)
});

router.put('/heroes/:id', function(req, res){
  res.send('PUT hero');
});

router.delete('/heroes/:id', function(req, res){
  Heroes.findOneAndRemove({_id: req.params.id}).then(function(result){
    res.send(result);
  });  
});

module.exports = router;
