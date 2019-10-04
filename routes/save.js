const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://base_nav:01Qwerty@cluster0-ojmjc.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.once('open',(err)=>{
  if(err) throw err;
  console.log('Connected to db');
});

const tripModel = require('../models/trip');

let filePath = path.join(__dirname,'../data/trips.json');
let tripData = fs.readFileSync(filePath, "utf8");


let tripDataArr=JSON.parse(tripData);


tripDataArrLength = tripDataArr.length;
    for( let i=0; i<tripDataArrLength; i++) {
        console.log(tripDataArr[i].fromName);
        console.log(tripDataArr[i].toName);
        console.log(tripDataArr[i].departAt);
        console.log(tripDataArr[i].vehicle);
        const trip = new tripModel({
            fromName: tripDataArr[i].fromName,
            toName: tripDataArr[i].toName,
            departAt: tripDataArr[i].departAt,
            vehicle: tripDataArr[i].vehicle
        });
        
        trip.save()
       .then(function(doc){
    console.log("Сохранен объект", doc);
    mongoose.disconnect();  // отключение от базы данных
})
.catch(function (err){
    console.log(err);
    mongoose.disconnect();
});
  }

