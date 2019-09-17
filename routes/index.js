var express = require('express');
var router = express.Router();
let car = []
const jsonParser = express.json();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Enter your car' });
});

/* Post home page. Send data*/
router.post('/', function(req) {
  
  car.push(req.body);
  console.log(car);
let car_check = JSON.parse(req.body);
console.log(car_check.model);
  /*let car_check = JSON.parse(req.body, (data)=> {
    console.log(data);
  });*/

  

});



module.exports = router;


