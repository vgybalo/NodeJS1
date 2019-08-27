var express = require('express');
var router = express.Router();
//const usersRouter 

/* GET users listing. */
router.get('/', function(req, res, next) {//установлює адресу передачi даних
  res.render('cars', { titleCar: 'cars'}); 
  res.send(car);  
  console.log(cars);
  console.log(car);

});

module.exports = router;


