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

//const userSchema = require('../schemas/users.js');


/* GET users listing. */
router.get('/registr', function(req, res) {
    res.render('registr', { title: 'Registration'}); 
    
});


//registration
router.post('/registr', async (req, res) => {
    try {
        const {login, pwd} = req.body; 
       
        const a =  await CreateOne(login, pwd);
        const token = jwt.sign({id:a._id}, tokenSecret);
        console.log(token);
        res.cookie('auth', token);
        res.send('Welcome dragon slayer');
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
        
        const token = jwt.sign({id:b._id}, tokenSecret);        
        res.cookie('auth',token);
        console.log(token);
        res.send(`Welcome ${login}`);
        
    }
    catch(err) {
        console.log(err);
    }
});

//add article
router.get('/add', function(req, res) {
    res.render('addarticle', {title: 'Add article'}); 
});

router.post('/add', async (req, res) => {
    try {
        const {title, text} = req.body; 
        let {auth} = req.cookies;
        let userId = jwt.verify(auth, tokenSecret);
        console.log(userId.id);
        await CreateArticle(title, text, userId.id);
        res.send(title + '&nbsp' + text);
    }
    catch(err) {
        console.log(err);
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
router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    return res.status(200).redirect('/login');
});
module.exports = router;