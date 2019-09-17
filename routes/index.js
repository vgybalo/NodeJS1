var express = require('express');
var router = express.Router();
let car = []
const jsonParser = express.json();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Enter your car' });
});

/* Post home page. Send data*/
router.post('/', function(req, res) {
  
  
let car_model = req.body.model;
let car_price = req.body.price;

if (typeof(car_model) === "string") {

  if (car_model.length > 0 ) {
    if (typeof(car_price) === "string") {

  if (Number(car_price) > 0 ) {
    car.push(req.body);
    console.log(car);
  }
  else if (Number(car_price)>1000000000) {
    console.log ("You input very big number")
  }
  else console.log ("You don't input a number")
}
else console.log ("You input not a number")
  }
  else if (car_model.length>256) {
    console.log ("You input very long text")
  }
  else console.log ("You don't input a text")
}
else console.log ("You input not a text")
  /*let car_check = JSON.parse(req.body, (data)=> {
    console.log(data);
  });*/

  

});



module.exports = router;


