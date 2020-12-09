const express = require('express');
//const { request } = require('http');
const http = require('http');
const request = require('request');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);
const uuid = require('./utils/uuid');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

app.use(express.static(__dirname + '/static/'));
//app.use('/api', apiProxy);

app.get('/messenger', (req, res) => {
  res.sendFile(__dirname + '/static/messenger.html');
});

app.get('/sf', (req, res) => {
  res.sendFile(__dirname + '/static/sketchfab.html');
});

app.get('/uuid', (req, res, next) => {
  res.send(uuid.generate());
});

app.get('/notice', function(req, res, next) { 
  res.send({response: 'complete'});
});
/*
app.get('/', (req, res, next) => {
  proxy.web(req, res, { target: 'http://47.116.10.71:8080' });
});*/

app.get('/', function(req, res, next) { 
  //console.log(req);
  var page = '/messenger';
  var uri = req.protocol + '://' + req.get('host') + page;
  var msg = 'If you want to test the messenger, go  to this link <a href=page>uri</a>';
  msg = msg.replace('page', page);
  msg = msg.replace('uri', uri);
  msg = msg.local
  console.log(req.connection.localAddress);
  console.log(req.connection.remoteAddress);
  //console.log(server.address().address);
  msg += '<br><br>localAddress : ' + req.connection.localAddress;
  msg += '<br><br>remoteAddress : ' + req.connection.remoteAddress;
  msg += '<br><br>ip : ' + server.address().address;
  msg += '<br>port : ' + process.env.PORT;

  res.send(msg);
});

function isNullorEmpty(str) {
  return !str || str.length === 0;
};

app.get('/test', (req, res, next) => {
  var uri = 'http://47.116.10.71:8080';
  request(uri).pipe(res);
});

var chat = io
  .of('/chat')
  .on('connection', (socket) => {
    socket.on('login', data => {
      try {
        console.log('Client logged-in:\n name:' + data.name + '\n userid: ' + data.userid);
        console.log(data.name + ' joined Room \"' + data.room + '\"');

        socket.name = data.name;
        socket.userid = data.userid;
        socket.room = data.room;
        
        socket.join(data.room);
        // 전체에 알림
        chat.to(data.room).emit('login', data.name);
      }
      catch(e) {
        console.error(e);
      }
    });

    socket.on('chat', data => {
      if (!isNullorEmpty(socket.room) && socket.userid && data && data.msg) {
        console.log('Message from %s %s', socket.name, data.msg);
        var msg = {
          from: {
            name: socket.name,
            userid: socket.userid
          },
          msg: data.msg
        };
        socket.emit('mychat', msg);
        socket.broadcast.emit('chat', msg);
      }
      else {
        console.error('');
      }
    });

    socket.on('notice', data => {
      chat.emit('notice', "공지: message");
    });

    socket.on('forceDisconnect', () => {
      socket.disconnect();
    });

    socket.on('disconnect', () => {
      console.log('user disconnected: ' + socket.name);
    })
  });

server.listen(process.env.PORT || 3000, () => {
  console.log('Socket IO Server listening on port 3000');
});