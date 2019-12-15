const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const jws = require('jws');

const {CreateOne} = require('../controllers/userController.js');
const {LoginOne} = require('../controllers/userController.js');
const {CreateArticle} = require('../controllers/articleController.js');
const privKey = fs.readFileSync(path.join(__dirname,'../config/private.key'), 'utf8');
const pubKey = fs.readFileSync(path.join(__dirname,'../config/public.key'), 'utf8');
const privKey2 = fs.readFileSync(path.join(__dirname,'../config/private2.key'), 'utf8');
const pubKey2 = fs.readFileSync(path.join(__dirname,'../config/public2.key'), 'utf8');

router.get('/registr', function(req, res) {
    res.render('registr', { title: 'Registration'}); 
    
});

function populateStorage(key, value) {
  window.localStorage.setItem(key, value);
};

//registration
router.post('/registr', async (req, res) => {
    try {
        const {login, pwd} = req.body; 
        const CreatOneController =  await CreateOne(login, pwd);
        const token = jws.sign({
          header:{alg:'RS256'},
          payload: {id:CreatOneController._id},
          privateKey: privKey
        });
       const refreshtoken = jws.sign({
          header:{alg:'RS256'},
          payload: {id:CreatOneController._id},
          privateKey: privKey2
        });

        res.cookie('auth', token);
        //populateStorage('auth2', refreshtoken);
        
        res.send(`Welcome ${login}`);
    }
    catch(err) {
        console.log(err);
    } 
});  

//login
router.get('/login', function(req, res) {
    res.render('login', { title: 'Login'}); 
});

router.post('/login',  async (req, res) =>{
    try{
        const {login, pwd} = req.body;
        const UserLogin =  await LoginOne(login, pwd);
        const token = jws.sign({
          header:{alg:'RS256'},
          payload: {id:UserLogin._id},
          privateKey: privKey
        });
        const refreshtoken = jws.sign({
          header:{alg:'RS256'},
          payload: {id:UserLogin._id},
          privateKey: privKey2
        });

        res.cookie('auth', token);
      //  populateStorage('auth2', refreshtoken);
        
        res.send(`Hellow ${login}`);
        
    }
    catch(err) {
        console.log(err);
    }
});

function verify (req, res, next) {
    if(req.cookies['auth']){
        const{auth}=req.cookies;
        const verify= jwt.verify(auth, pubKey, {algorithms:['RS256']});


        next();
    }
    else if (localStorage.getItem('auth2')){
        const{auth2}=localStorage.getItem('auth2');
        const verify= jwt.verify(auth2, pubKey2, {algorithms:['RS256']});
        const userId = jwt.verify(auth, pubKey, {algorithms:['RS256']});

        //sinchronic 
         const token = jws.sign({
          header:{alg:'RS256'},
          payload: {id:UserLogin._id},
          privateKey: privKey
        });
        res.cookie('auth',token);
        next();
    }
    else {
        res.redirect('/login');
    }
}

//add article
router.get('/', verify, function(req, res) {
    res.render('addarticle', {title: 'Add article'}); 
});

router.post('/', verify, async (req, res) => {
    try {
        const {title, text} = req.body; 
        let {auth} = req.cookies;
        const userId = jwt.verify(auth, pubKey, {algorithms:['RS256']});
       
        console.log(userId.id);
        await CreateArticle(title, text, userId.id);
        res.send(title + '&nbsp' + text);
    }
    catch(err) {
        return res.status(200).redirect('/login');
    }   
});

module.exports = router;
