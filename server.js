const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const path=require('path');
//My express app
const app = express();
//The http server on which it runs
const server = http.Server(app)
//The socket.io server
const io = socketio(server)

 app.use('/',express.static(path.join(__dirname,'public')));

io.on('connection',function (socket) {
    console.log('connection made '+socket.id);
    socket.on('msg',function (data) {
         io.emit('msg2',data);
    })
})


server.listen(2222, () => {
    console.log(`Server started at http://localhost:2222`)
})