var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const {CreateOne} = require('../controllers/userController.js');
const Ajv = require('ajv');
//const bcrypt = require('bcrypt');
//const saltRounds = 10;

const UserModel = require('../models/user');
const ArticleModel = require('../models/articleModel');

const ajv = new Ajv();
const userSchema = require('../schemas/users.js');

let {userId} = null;

// GET users authorisation & login
router.post("/auth", async (req, res) => {
//ajv
                    try {
                        const {login, pwd, role} = req.body;
                        if (role) {
                            const validate = ajv.compile(userSchema);
                            const valid = validate({
                                login, pwd, role
                            });
                            //console.log(valid);
                            if (!valid) {
                                const { errors } = validate;
                                const result = { status: 'invalid data' };
                                //console.log(errors);
                                res.json(result);
                            }
                           else {
                                await CreateOne(login, pwd, role);
                            }
                        }
                        else {
                            async  (rec, res) => {
                            const {login, pwd} = req.body;
                            const userDb = await UserModel.findOne({login})
                            
                            pwd = await hashPwd(pwd);
                            
                            const auth = await userDb.comparePwd(pwd);
                                if (auth) {
                                    res.cookie = ('auth','ok');
                                    console.log('Auth Ok');
                                    userId = userDb.user_id;
                                }
                                else {
                                    res.send('Invalid login or pwd');
                                }
            
                        }     
                        }
                    }
                    catch(err) {
                        console.log(err);
                    } 
});  

//All articles
router.get("/", async (req, res) => {

    ArticleModel.find({"userId" : userId})
                            .then(data => {
                                let articleList = "${data.title} + ${data.text}";
                                res.render('allarticles', {articles: articleList});
                            })    
                            .catch(err => {
                                res.send('The are no articles for this user'+err);
                            }) ;


});

//New article
router.get("/createArt", async (req, res) => {
//ajv
                    try {
                        const {title, text} = req.body;
                        const {published} = 1;
                        const {comentId} = 0;
                        await CreateOneArticle(title, text, userId, published, comentId);
            
                        res.render('article', { titleArticle: 'Enter new article' });   
                    }
                    catch(err) {
                        console.log(err);
                    } 
                    
});


module.exports = router;