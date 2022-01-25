//Node server whick will handle socket io Connection
console.log("Starting the server");

const io=require('socket.io')(8000);

const users={};

io.on('connection',socket=>{
  socket.on('new-user-joined',name=>{
    console.log("New-User",name);
    console.log("Ganga Yadav");
       users[socket.id]=name;
       socket.broadcast.emit('user-joined',name);
  });

socket.on('send',message=>{
    socket.broadcast.emit('receive',{message:message,name:user[socket.id]});
});


});