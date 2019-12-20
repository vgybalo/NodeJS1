const express = require('express');
const createError = require('http-errors');
const app = express();
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

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
autoIncrement.initialize(mongoose.connection);


 
app.get("/car/:id", function(req, res){
      
    let id = req.params.id; // received id
    console.log(id);
     res.send(id);
    
    // search by id
    /*for(let i=0; i<cars.length; i++){
        if(cars[i].id==id){
            car = cars[i];
            break;
        }
    }*/
    // send car
    if(car){
        res.send(car);
        console.log(car);
    }
    else{
        res.status(404).send();
    }
});

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
        await CreateArticle(title, text, userId.id);
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


app.listen(3000);

