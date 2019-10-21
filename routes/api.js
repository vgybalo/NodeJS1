var express = require('express');
var router = express.Router();
const BookModel = require('../models/book');
const AuthorModel = require('../models/author');
const bodyParser = require("body-parser");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post("/", function (req, res) {
    if(!req.body) return res.sendStatus(400);
    let book = req.body.book;
    let author = req.body.author;
       
    if (req.body.book) {
        BookModel.find({"title" : req.body.book})
            .then(data => {
                if(data.length===0){
                    const book = new BookModel({
                        title: req.body.book,
                        });
                        book.save()
                        res.send(book);
                        
                }
                else res.send('The book with this name has been already registered');
            })
            .catch(err => {
                console.log(err);
            }) ;
    }

    else if (req.body.author) {
        AuthorModel.find({"foolname" : req.body.author})
            .then(data => {
                if(data.length===0){
                    const author = new AuthorModel({
                        foolname: req.body.author,
                        });
                       author.save()
                        res.send(author);
                        
                }
                else res.send('The author with this name has been already registered');
            })
            .catch(err => {
                console.log(err);
            }) ;
    } 

    else {
       /* BookModel.findOne({"title" : req.body.book_comp})
            .populate('authors')
                .exec(function (err, story) {
                    if (err) return handleError(err);
                res.send(story);   
            
                }) */
        let findBook =  new Promise((res, rej) => {
           return BookModel.findOne({"title" : req.body.book_comp})
            
        })
        .catch(err=> console.log(err));

        let findAuthor =  new Promise((res, rej) => {
           return  AuthorModel.findOne({"foolname" : req.body.autho_comp})
        })
        .catch(err=> console.log(err));

        
        Promise.all([findBook, findAuthor])
            .then((el) => {
                el[0].populate('authors')
                .exec(function (err, story) {
                    if (err) return handleError(err);
                res.send(story);
                
                })
            })    
            .catch(err=> console.log(err));       
    }           
        
    
});
  


module.exports = router;