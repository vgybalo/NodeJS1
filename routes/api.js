var express = require('express');
var router = express.Router();
const UserModel = require('../models/user');
const bodyParser = require("body-parser");
const {CreateOne} = require('../controllers/userController.js');
const Ajv = require('ajv');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const ajv = new Ajv();
const userSchema = require('../schemas/users.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
   
    res.render('index', { title: 'Express' });
});

//bcrypt


router.post("/", async (req, res) => {
//ajv
                    try {
                        const {userEmail, userName, userSurname, userLogin, userBirthday, phone, pwd} = req.body; 
                        const validate = ajv.compile(userSchema);
                        const valid = validate({
                            userEmail, userName, userSurname, userLogin, userBirthday, phone, pwd
                        });
                        //console.log(valid);
                        if (!valid) {
                            const { errors } = validate;
                            const result = { status: 'invalid data' };
                            //console.log(errors);
                            res.json(result);
                        }
                        else {
                            CreateOne();
                        }
                    }
                    catch(err) {
                        console.log(err);
                    } 
});  

module.exports = router;