const http = require('http');
const fs = require('fs');
const pass = require('path')


const server = http.createServer((req, res) => {
        let filePath = path.join (__dirname,'public', req.url === '/' ? index.html :req.url)
        if (req.url === '/') {
            fs.readFile(__dirname + '/public/index.html', 'utf-8', (err, data) => {
                    res.writeHead(200, {"Content-Type" : "text/html"});
                    res.end(data);
            })
        }
        else if (req.url === '`index/') {
            fs.readFile(__dirname + '/public/index.html', 'utf-8', (err, data) => {
                    res.writeHead(200, {"Content-Type" : "text/html"});
                    res.end(data);
            })
        }
        else if (req.url === '/about') {
    fs.readFile(__dirname + '/public/about.html', 'utf-8', (err, data) => {
                    res.writeHead(200, {"Content-Type" : "text/html"});
                    res.end(data);
            })

    }
         else if (req.url === '/contact') {
    fs.readFile(__dirname + '/public/contact.html', 'utf-8', (err, data) => {
                    res.writeHead(200, {"Content-Type" : "text/html"});
                    res.end(data);
            })

    }
        else {
            fs.readFile(__dirname + '/public/' + req.url, 'utf-8', (err, data) => {
            res.end(data);
             })
        }
       

    /*if (req.url === '/') {

        fs.readFile(__dirname+'/public/index.html', 'utf-8', (err, data) => {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(data);



        })
    /*res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end ('123');*/

    /*}
    else if (req.url === '/about') {
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end ('here is about');

    }
    else {
    res.writeHead(404, {"Content-Type" : "text/html"})
      res.end ('<h3>try run / </h3><h1>404</h1>');  

    }*/


})

const PORT = process.env.PORT || 3000;

server.listen(PORT,() => {
    console.log('listening')
})