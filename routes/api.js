var express = require('express');
var router = express.Router();
const UserModel = require('../models/user');
const bodyParser = require("body-parser");
const Ajv = require('ajv');
const bodyParser = require('body-parser');
const bCrypt = require('bcrypt');
const saltRounds = 10;

const ajv = new Ajv();
const userSchema = require('../schemas/users.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
   
    res.render('index', { title: 'Express' });
});

//bcrypt


router.post("/", function (req, res) {
    if(!req.body) return res.sendStatus(400);
    bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.userpwd, 123456, function(err, hash) {
        let userLogPwd = hash;
        });
    let emailList = req.body.email;
    let userLogEmail = req.body.useremail;
    
   
    if (!req.body.useremail) {
        UserModel.find({"email" : emailList})
            .then(data => {
                if(data.length===0){
                    //ajv
                        const validate = ajv.compile(userSchema);
                        const valid = validate({
                            userEmail: req.body.email,
                            userName: req.body.name,
                            userSurname: req.body.surname,
                            userLogin: req.body.login,
                            userBirthday: req.body.birthday,
                            phone: req.body.phone,
                            pwd: userLogPwd
                        });
                        //console.log(valid);
                        if (!valid) {
                            const { errors } = validate;
                            const result = { status: 'invalid data' };
                            //console.log(errors);
                            res.json(result);
                        }
                        else {
                        const user = new UserModel({
                                userEmail: req.body.email,
                                userName: req.body.name,
                                userSurname: req.body.surname,
                                userLogin: req.body.login,
                                userBirthday: req.body.birthday,
                                phone: req.body.phone,
                                pwd: userLogPwd
                            
                            });
                            let cookieHash = userLogPwd.slice(0, 5);
                            res.cookie('visitorsId',cookieHash)/*.end('Cookie sent')*/
                        user.save()
                        res.send(user);
                        }
                }
                else res.send('The user with this email has already registered');
            })
            .catch(err => {
                console.log(err);
            }) ;
            
            //console.log(data.email);
                }
        
      
    
    
    else {
        UserModel.findOne({"email" : userLogEmail})
            .then(data => {
                    if(UserModel.comparePwd && req.cookies.visitorsId===cookieHash){
                        res.send(`You are logged
                        <h2>Change password</h2>
                        <form action="/api/change" method="post">
                        <input type="hidden" name="usercuremail" value="${userLogEmail}">
                        
                        <input type="text" name="oldpwd" placeholder="old password">
                        <input type="text" name="newpwd" placeholder="new password">
                        <input type="submit" value="change password">
                        </form>
                        <h2>Delete user</h2>
                        <form action="/api/delete" method="post">
                        <input type="hidden" name="userdelemail" value="${userLogEmail}">
                        <input type="text" name="delpwd" placeholder="password">
                        <input type="submit" value="Delete user">
                        </form>`);
                    }
                    else res.send('The login or password is wrong. Try again');           
                })
            .catch(err => {
                console.log(err);
            }) ;  
    } 
   
        
    
});
router.post("/delete", function (req, res) {
    if(!req.body) return res.sendStatus(400);
    
    let userDelEmail = req.body.userdelemail;
    console.log(userDelEmail);

    //let userOldPwd = req.body.oldpwd;
        if(userDelEmail){
            UserModel.findOneAndDelete({"email" : userDelEmail})
            .then(()=> {
                res.send(`User is deleted`+ userDelEmail); 
            })
            .catch(err => {
                res.sendStatus(404);
            }) ;       
        };
       
            

})   

router.post("/change", function (req, res) {
    if(!req.body) return res.sendStatus(400);
    
    let userCurEmail = req.body.userdelemail;
    console.log(userCurEmail);

    //let userOldPwd = req.body.oldpwd;
        if(req.body.oldpwd && req.body.newpwd){
            UserModel.findOneAndUpdate({"email" : userCurEmail},
            {pwd: req.body.newpwd})
            .then(()=> {
                res.send(`Password is changed`+ req.body.newpwd); 
            })
            .catch(err => {
                res.sendStatus(404);
            }) ;       
        };
       
            

})   

module.exports = router;