var express = require('express');
var router = express.Router();
const UserModel = require('../models/user');
const bodyParser = require("body-parser");
const Ajv = require('ajv');
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
   
    if (!req.body.useremail) {
        async (rec,res)=>{
            try {
                const {userEmail, userName, userSurname, userLogin, userBirthday, phone, pwd} = rec.body;
                const user = await UserModel ({
                    userEmail, userName, userSurname, userLogin, userBirthday, phone, pwd
                });
                user.pwd = await user.hashPwd(pwd);
                await user.save;
                res.send('Ok!');
            }
            catch(err) {
                console.log(err);
            }
        }
 
    } 
    else {
        async (rec, res) => {
            try {
                const {useremail, userpwd} = rec.body;
                const user = await UserModel.findOne({useremail});
                const auth = await user.comparePwd(pwd);
                if (auth) {
                    res.cookie = ('auth','ok');
                }
                else {
                    res.send('Invalid pwd');
                }
            }
            catch(err) {
                console.log(err);
            }
        }     
    }
        
    
});

            
  

module.exports = router;