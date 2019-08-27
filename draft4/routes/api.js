const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');


let data = null;
let dataRead  = null;
router.post('/', (req, res)=>{
    console.log(req.body);
    
        fs.appendFile(path.join(__dirname,  'users.txt'), data, function(error){
        if(error) throw error; // error
                    
        console.log("Запись файла завершена. Содержимое файла:");
        let dataRead = fs.readFileSync("users.txt", "utf8");
        console.log(dataRead);
    });
    let dataParse = fs.readFile("users.txt", "utf8", 
            function(error,data){
                
                if(error) throw error;
                console.log('data'); 
                console.log(data);  // dataparse from users.txt
});
    res.send(dataParse);
});



module.exports = router;
