var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

const tripModel = require('../models/trip');

//const tripData = require('../data/trip');
//const bodyParser = require("body-parser");
//const jsonParser = bodyParser.json();
//const urlencodedParser = bodyParser.urlencoded({extended: true});


/* GET users listing. */
router.get('/', function(req, res, next) {
  const trips = tripModel.find({})
        .then(data => {
        res.send(data)
        });
});

let tripData = [
  {
    "fromName": "Berlin, Germany",
    "toName": "Kyiv, Ukraine",
    "departAt": "2019-05-29T00:00:00.000Z",
    "vehicle": "plane"
  },
  {
    "fromName": "Berlin, Germany",
    "toName": "Dnipro, Ukraine",
    "departAt": "2019-06-02T00:00:00.000Z",
    "vehicle": "car"
  },
  {
    "fromName": "London, UK",
    "toName": "Kyiv, Ukraine",
    "departAt": "2019-06-07T00:00:00.000Z",
    "vehicle": "plane"
  },
  {
    "fromName": "Lyon, France",
    "toName": "Kyiv, Ukraine",
    "departAt": "2019-06-07T00:00:00.000Z",
    "vehicle": "plane"
  },
  {
    "fromName": "Moscow, Russia",
    "toName": "Kyiv, Ukraine",
    "departAt": "2019-06-08T00:00:00.000Z",
    "vehicle": "car"
  },
  {
    "fromName": "Kyiv, Ukraine",
    "toName": "Berlin, Germany",
    "departAt": "2019-05-30T00:00:00.000Z",
    "vehicle": "train"
  }
]
//console.log(tripData[1]);
//router.post("/addAllTrip", function (request, response) {
    //if(!request.body) return response.sendStatus(400);
         

tripDataLength = tripData.length;
    for( let i=0; i<tripDataLength; i++) {
       console.log(tripData[i].fromName);
        const trip = new tripModel({
            fromName: tripData[i].fromName,
            toName: tripData[i]. toName,
            departAt: tripData[i]. departAt,
            vehicle: tripData[i].vehicle
        });
        
        trip.save();
        //res.send('Ok');
   }
//});

/*router.post("/add", function (request, response) {
    //if(!request.body) return response.sendStatus(400);
    
     /*const trip = new TripModel({
        title: request.body.title,
        content: request.body.content
    });
    trip.save();
    res.send('Ok');
   
});*/




module.exports = router;