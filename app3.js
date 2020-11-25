var express = require('express');
//const { request } = require('http');
var http = require('http');
const request = require('request');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var uuid = require('./utils/uuid');

/*var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});*/
const proxy = require('express-http-proxy');
const { createProxyMiddleware } = require('http-proxy-middleware');
/*var server = http.createServer((req, res) => {
  proxy.web(req,res, {target: 'http://47.116.10.71:8080' });
});*/
const URI = 'http://47.116.10.71:8080';
const url = require('url');
/*const apiProxy = proxy(URI, {
  proxyReqPathResolver: req => url.parse(req.baseUrl).path
});*/
const jsonPlaceholderProxy = createProxyMiddleware({
  target: URI,
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug',
});

app.use('/proxy', jsonPlaceholderProxy );

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

app.get('/', function(req, res, next) { 
  //console.log(req);
  var page = '/messenger';
  var uri = req.protocol + '://' + req.get('host') + page;
  var msg = 'If you want to test the messenger, go to this link <a href=page>uri</a>';
  msg = msg.replace('page', page);
  msg = msg.replace('uri', uri);

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
/*
1넴 절규 날개
1페이즈
절규 단상에서 피하기
음파 유도하고 관문으로 이동
반향 정위 (이격, 신화 3인)
탱 : 출혈의 이빨 (받는 물리피해 증가, 방혈 10중, 치감) 시전 하면 탱 인계

2페이즈 (약30초) : 술래 잡기 (보스 12미터 안에 들어가면 안됨)
음파 피하고 보스 피하기
절규 기둥뒤에서 피하기
*/