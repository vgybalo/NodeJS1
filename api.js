

    function promiseRadfile (filePath) {
    const fs = require('fs');
    
    
    return new Promise((res, rej) => {       
        if (filePath!==null || filePath!==undefined) {   
            return res;
        }
        else {
            return err;
        }
        //console.log('after calling readFile');
        //console.log(filePath);
    })
 
    }

    const path = require('path');
    let filePath = path.join(__dirname,'readFile.js');

    module.exports.promiseRadfile (filePath)
    .then ( filePath => {fs.readFile(filePath, 'utf8', function(err, contents) {
                console.log(contents);
            });
    })
    //.then (contents => console.log(contents))
    .catch (err => console.log(err));

