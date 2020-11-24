var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname));

app.get('/messenger', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

var chat = io
    .of('/chat')
    .on('connection', (socket) => {

        socket.on('login', data => {
            console.log(data);
            console.log('Client logged-in:\n name:' + data.name + '\n userid: ' + data.userid);

            socket.name = data.name;
            socket.userid = data.userid;

            chat.emit('login', data.name);
        });

        socket.on('chat', data => {
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