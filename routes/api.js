var express = require('express');
var router = express.Router();
const UserModel = require('../models/user');
const bodyParser = require("body-parser");



/* GET users listing. */
router.get('/', function(req, res, next) {
  
});

router.post("/registration", function (request, response) {
    //if(!request.body) return response.sendStatus(400);
    console.log(request.body);
     const user = new UserModel({
        userName: request.body.user,
        email: request.body.email,
        pwd: request.body.pwd
    });
    user.save()
    .catch(err => {
        console.log(err);
    }) ;
    response.send(user);
   
});

/*const users = ArticleModel.find({})
        .then(data => {
        res.send(data)
        });*/


module.exports = router;