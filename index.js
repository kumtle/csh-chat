var express = require('express');
var path = require('path');

var WebsSocketServer = require('ws').Server;
const port = 3001;
var wss = new WebsSocketServer({port});

wss.on('connection', ws => {
    ws.send("Hello!!");
    ws.on('message', message => {
        let sendData = {event: 'res', data: null};
        message = JSON.parse(message);
    
        switch(message.event) {
            case 'open':
                console.log('Received: %s', message.event);
                break;
            case 'req':
                sendData.data = message.data;
                ws.send(JSON.stringify(sendData));
                break;
            default:
        }
    });
});

