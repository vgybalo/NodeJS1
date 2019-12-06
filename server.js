const puppeteer = require('puppeteer');
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://dou.ua/lenta/digests/');
    await page.waitFor(10000);
  
    await page.click('body > div.g-page > div.l-content.m-content > div > div.col70.m-cola > div > div > div.col50.m-cola > div.b-lenta > article:nth-child(1) > h2 > a');
    await page.waitFor(5000);
    const result = await page.evaluate(() => {
        let article = page.$$eval('article', article => article.content);
        return article;
        
    });

  browser.close();
  console.log(result.h1);
  return result;
  
};

scrape().then((value) => {
    console.log(value); // Получилось!
});



//socket server on
app.listen(3000);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  
  socket.on('new-msg', function (data) {     
      socket.emit('msg', result);
      
        //console.log(data.msg);
       // console.log(data.name);
  });


	
});