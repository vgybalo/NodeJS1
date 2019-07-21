const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
    });

server.listen(3000,'127.0.0.1');
let date = String(new Date());
let cpu = os.cpus();
let hostname = os.hostname();
let memory = os.totalmem();

let userCompInfo = 'CPU-' + cpu.model + ' ' + 'hostname-'+hostname + ' ' + 'memory-' + memory+ '\n';



let filename = 'log' + '-' + date[4] +date[5] +date[6] + '-' + date[8] +date[9] + '-' + date[11] +date[12] + date[13] +
date[14] + '-' + date[16] +date[17] + '-' + date[19] +date[20] + '-' + date[22] +date[23] +'.log';
console.log(filename);

fs.mkdir('lounchLogs', function(err) {
    fs.writeFile(path.join(__dirname,'lounchLogs', filename), userCompInfo,
        (err)=>{
            if(err) {
                throw err;
            }
        }
    )   
  });
