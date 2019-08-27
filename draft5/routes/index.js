var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Enter your car' });
});

/* Post home page. Send data*/
router.post('/', function(req) {  
  car.push(req.body);
  console.log(car);   
});



module.exports = router;


