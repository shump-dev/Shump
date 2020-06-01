const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let items = [];

io.on('connection', socket => {
    // console.log(`Socket Conectado: ${socket.id}`);

    socket.emit('previousItem', items)

    socket.on('sendItem', data => {
        items.push({id: items.length + 1, name: data.name, author: data.author, description: data.description });
        socket.broadcast.emit('previousItem', items)
    });

    socket.on('editItem', data => {
        items = items.map((item) => {
            if (item.id == data.id) {
                return data
            } else {
                return item
            }
        });
        socket.broadcast.emit('previousItem', items)
    });

    socket.on('getItem', data => {
        var tempItems = items.filter(function(item) {
            return item.id == data
        });
        socket.emit('detailedItem', tempItems[0])
    });

    socket.on('removeItem', data => {
        items = items.filter((item) => {
            return item.id != data 
        });
        socket.emit('previousItem', items)
        socket.broadcast.emit('previousItem', items)
    });
});

server.listen(3000);