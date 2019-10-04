var express = require('express');
var router = express.Router();

const urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET users listing. */
router.get('/', function(req, res, next) {
  const trips = tripModel.find({})
        .then(data => {
        res.send(data)
        });
});


router.post("/", function (request, response) {
    if(!request.body) return response.sendStatus(400);
    
     let fromNameList = req.query.fromName;
    const trips = tripModel.find({"fromName" : fromNameList})
        .then(data => {
        res.send(data)
        });
    
    res.send(fromNameList);
   
});


console.dir(req.query.fromName)


module.exports = router;