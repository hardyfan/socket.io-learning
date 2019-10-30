var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){ 
	console.log('a user connected');//当有客户端连接上来时
	socket.on('disconnect', function(){
	  console.log('user disconnected');//当该客户端下线时
	});

	socket.on('chat message', function(msg){
		io.emit('chat message', msg);//接受到消息就广播出去
		console.log('message:'+msg);
	});
	socket.on('chat message', function(msg){
		
	});
});

http.listen(port, function(){
  console.log('listening on *:3000');
});