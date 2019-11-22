var express = require('express');
var router = express.Router();
const passport = require('passport');
passport.serializeUser((user,done)=>{
    done (null,user);
});
/* GET home page. */
router.get('/auth/google', passport.authenticate('google', {scope:['profile']}),

);
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  });

router.get('/auth/google/cb',passport.authenticate('google',{failureRedirect:'/'}),(req,res)=>
{res.send('Ok');
});

router.get('/secret', passport.authenticate('google',{failureRedirect:'/'}),(req,res)=>{
  res.send('secured');
  });
module.exports = router;
