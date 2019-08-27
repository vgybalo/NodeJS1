var express = require('express');
var router = express.Router();


/* GET single page. */
router.get('/article', function(req, res, next) {
  res.render('article', { title: 'Article' });
});

module.exports = router;