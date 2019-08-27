var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userList', function(req, res, next) {
  res.render('userList', { title: 'userList' });
});


module.exports = router;
