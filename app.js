const express = require('express');
const app = express();
const server = require('http').createServer(app);
const corsOptions = {
  //origin: 'http://localhost:3000', // 허락하고자 하는 요청 주소
  //origin: '*', // 모든 주소 허용함
  origin: ['http://localhost:3000', 'http://localhost:2001', 'http://localhost:2000'] ,//'*', // 허락하고자 하는 요청 주소
  credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};
const io = require('socket.io')(server, { cors: corsOptions });
const cors = require('cors');
const uuid = require('./utils/uuid');
const port = process.env.PORT || 5000;

// 라우팅
app.use(express.static(__dirname + '/static/'));

//app.use(cors(corsOptions));
app.use(cors());

app.get('/messenger', (req, res) => {
  res.sendFile(__dirname + '/static/messenger.html');
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

  res.send(msg);
});

//const event_connection = 'connection';

function checkLogin(data) {
  if (data) {
    return true;
  }
  return false;
}

var chat = io
  .of('/chat')
  .on('connection', (socket) => {
    ///// New
    socket.on('login_user', (data, callback) => {
      if (checkLogin(data)) {
        //// 로그인 처리
        // user.add(uid, roomid, socketid);
        //// 로그인시 기본 로비 입장
        socket.join('lobby'); 
        callback({result: 'complete', data: '로그인 성공'});
      }
      else {
        callback({result: 'fail', data: '로그인 실패'});
      }

      if (callback) {
        callback({ message: '로그인'});
      }      
    });


    ///// Deprecated
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

    socket.on('message', data => {

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
        //console.log(socket.room);
        socket.to(socket.room).emit('chat', msg);
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

    socket.on('leaveRoom', () => {
      socket.to(socket.room).emit('leaveRoom', socket.name)
    })
  });

  function isNullorEmpty(str) {
    return !str || str.length === 0;
  };
  
server.listen(port, () => {
  console.log('Socket IO Server listening on port %d', port);
});