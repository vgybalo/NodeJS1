var app = require('http').createServer(handler)
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
let id = [];
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
       socket.broadcast.emit('input',data.my+' зашел <br />');
       socket.emit('input',"Вы " + data.my+' зашел <br />');
       id.push([socket.id, data.my]);
       console.log(id);
       
    //console.log(data);
  });
  socket.on('new-msg', function (data) {     
      socket.emit('msg', {msg: data.msg, name: data.name});
      socket.broadcast.emit('msg', {msg: data.msg, name: data.name});
        //console.log(data.msg);
       // console.log(data.name);
  });

let userOutName = null;
    socket.on('disconnect', function(data) {
        
        /*for(let i = 0; i < id.length; i++){
            
            console.log(id[1]);
            if (id[0]===socket.id) {
                userOutName= id[1];
                console.log(id[1]);
            }
        }*/
        userOutName = socket.id
		socket.broadcast.emit('output',userOutName+' вышел <br />');
        socket.emit('output',userOutName+' вышел <br />');
         console.log(userOutName);
	});
});