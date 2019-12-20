const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: true});

const app = express();
const {CreateOne} = require('./controllers/userController.js');
const {LoginOne} = require('./controllers/userController.js');
const {tokenSecret} = require('./config/keys');
const {tokenSecret2} = require('./config/keys');

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', err => console.log('Mongo error occured',err));
db.once('open',(err)=>{
  if(err) throw err;
  console.log('Connected to db');
});

/*app.get('/registr', function(req, res) {
     res.sendFile(__dirname + "/public/auth.html");
    
});*/

app.post('/registr', urlencodedParser, async (req, res) => {
try {
    const {login, pwd} = req.body; 
    const newUser =  await CreateOne(login, pwd);
    const token = jwt.sign({id:newUser._id}, tokenSecret, {expiresIn: 30000});
    const refreshtoken = jwt.sign({id:newUser._id}, tokenSecret2, {expiresIn: 259200000});
    
    res.cookie('auth', token);
    res.cookie('auth2',refreshtoken);
    res.send(`Welcome ${login}`);
}
catch(err) {
    console.log(err);
} 
});  

//login

app.post('/login',  async (req, res) =>{
    try{
        const {login, pwd} = req.body;
        const currentUser =  await LoginOne(login, pwd);
        
        const token = jwt.sign({id:currentUser._id}, tokenSecret, {expiresIn: 30000 }); 
        const refreshtoken = jwt.sign({id:b._id}, tokenSecret2, {expiresIn: 259200000});
        res.cookie('auth',token);
        res.cookie('auth2',refreshtoken);
        
        res.send(`Hellow ${login}`);
        
    }
    catch(err) {
        console.log(err);
    }
});
 

app.listen(3001);