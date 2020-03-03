var express = require('express');
var router = express.Router();
//const UserModel = require('../models/user');
//const bodyParser = require("body-parser");
const {CreateOne} = require('../controllers/userController.js');
const {LoginOne} = require('../controllers/userController.js');
const {CreateArticle} = require('../controllers/articleController.js');
const {ShowAllArticles} = require('../controllers/articleController.js');
const jwt = require('jsonwebtoken');
//const Ajv = require('ajv');
const {tokenSecret} = require('../config/keys');
const {tokenSecret2} = require('../config/keys');

//const userSchema = require('../schemas/users.js');


/* GET users listing. */
router.get('/registr', function(req, res) {
    res.render('registr', { title: 'Registration'}); 
    
});


//registration
router.post('/registr', async (req, res) => {
    try {
        const {login, pwd, name, surname, email} = req.body; 
        console.log(req.body);
        const a =  await CreateOne(login, pwd, name, surname, email);
        const token = jwt.sign({id:a._id}, tokenSecret, {expiresIn: 30000});
        const refreshtoken = jwt.sign({id:a._id}, tokenSecret2, {expiresIn: 259200000});
        
        res.cookie('auth', token);
        res.cookie('auth2',refreshtoken);
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
        const b =  await LoginOne(login, pwd);
        
        const token = jwt.sign({id:b._id}, tokenSecret, {expiresIn: 30000 }); 
        const refreshtoken = jwt.sign({id:b._id}, tokenSecret2, {expiresIn: 259200000});
        res.cookie('auth',token);
        res.cookie('auth2',refreshtoken);
        
        res.send(`Welcome ${login}`);
        
    }
    catch(err) {
        console.log(err);
    }
});

function verify (req, res, next) {
    if(req.cookies['auth']){
        const{auth}=req.cookies;
        const verify= jwt.verify(auth, tokenSecret);
        next();
    }
    else if (req.cookies['auth2'] && !req.cookies['auth']){
        const{auth2}=req.cookies;
        const verify= jwt.verify(auth2, tokenSecret2);
        let userId = jwt.verify(auth, tokenSecret);
        const token = jwt.sign(userId, tokenSecret, {expiresIn: 30000 });
        res.cookie('auth',token);
        next();
    }
    else {
        res.redirect('/login');
    }
}

//add article
router.get('/add', verify, function(req, res) {
    res.render('addarticle', {title: 'Add article'}); 
});

router.post('/add', verify, async (req, res) => {
    try {
        const {title, text} = req.body; 
        let {auth} = req.cookies;
        let userId = jwt.verify(auth, tokenSecret);
       
        console.log(userId.id);
        await CreateArticle(title, text, userId.id, done, userDone);
        res.send(title + '&nbsp' + text);
    }
    catch(err) {
        return res.status(200).redirect('/login');
    }   
});

//show all articles
router.get('/', async (req, res) => {
    try {
        let articles = await ShowAllArticles();
        let allarticles = '';

        for (let i=0; i<2; i++) {
            allarticles += articles[i].title+'\n'+articles[i].text+'\n';
        }
        
        res.render('index', {title: 'Our articles', content: allarticles});
            
    }
    catch(err) {
        console.log(err);
    } 
});


//logout
router.get('/logout', verify, (req, res) => {
    res.clearCookie('auth');
    res.clearCookie('auth2');
    return res.status(200).redirect('/login');
});
module.exports = router;