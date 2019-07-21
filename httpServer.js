const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

});


server.listen(3000,'127.0.0.1');
let date = new Date();

//console.log(date);
fs.appendFile('lounch.logs', date +'\n', function (err) {
  if (err) throw err;
  console.log(date);
});
