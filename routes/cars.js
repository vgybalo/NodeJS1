var express = require('express');
var router = express.Router();
//const usersRouter 

/* GET users listing. */
router.get('/', function(req, res, next) {//установлює адресу передачi даних
  res.render('cars', { titleCar: 'Cars'}); 
  res.send(car);  
});

module.exports = router;


