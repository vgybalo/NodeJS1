var express = require('express');
var router = express.Router();
const UserModel = require('../models/user');
const bodyParser = require("body-parser");



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post("/", function (req, res) {
    if(!req.body) return res.sendStatus(400);
    let emailList = req.body.email;
    let userLogEmail = req.body.useremail;
    let userLogPwd = req.body.userpwd;
    if (!req.body.useremail) {
        UserModel.find({"email" : emailList})
            .then(data => {
                if(data.length===0){
                    const user = new UserModel({
                            userName: req.body.user,
                            email: req.body.email,
                            pwd: req.body.pwd
                        });
                    user.save()
            .catch(err => {
                console.log(err);
            }) ;
            res.send(user);
            console.log(data.email);
                }
                else response.send('The user with this email has already registered');
            })  
    }
    
    else {
        UserModel.findOne({"email" : userLogEmail})
            .then(data => {
                    if(data.email===userLogEmail && data.pwd===userLogPwd){
                        res.send(data.user + ', you are logged');
                    }
                    else res.send('The login or password is wrong. Try again');           
                })
            .catch(err => {
                console.log(err);
            }) ;  
    } 
   
    if (req.body.pwdchange==='1') {
        let oldPwd = req.body.oldpwd;
        if(oldPwd == userLogPwd){
            UserModel.updateOne({"email" : userLogEmail}, {
                    pwd: req.body.newpwd
            });
            res.send(user);       
        };
       
    }            
    
});



module.exports = router;