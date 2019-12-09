const puppeteer = require('puppeteer');
var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

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
  
  socket.on('new-msg', function (data) {
     //ф-ція puppoteer 
    (async() => {
      
      // Запуск браузера
      const browser = await puppeteer.launch({headless: false});
      // Відкриваємо нову сторінку
      const page = await browser.newPage();
      const pageURL = data.url;
      
        try {
          // Перехід по URL
          await page.goto(pageURL);
          await page.waitFor(10000);
          console.log(`Відкрито сторінку: ${pageURL}`);
        } 
        catch (error) {
          console.log(`Не вдалося відкрити сторінку: ${pageURL} через помилку: ${error}`);
        }

      // Знаходимо селектор   
      const postsSelector = data.selector;     
        
        await page.waitForSelector(postsSelector);         
        const pageContent = await page.$eval(
          postsSelector, postsSelector => postsSelector.innerHTML);
        console.log('Kонтент: ', pageContent);          
    
       socket.emit('msg', pageContent); 
    
      // закриваємо браузер
      await browser.close();
      
      process.exit()
    })();

  });
  
});

