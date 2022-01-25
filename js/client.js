// prompt("Enter your name");
// alert("Hello Bharat");
// const name=prompt("Enter your name to join");
// const socket= io('http://localhost:8000');

const name ="Bhanu";
const form=document.getElementById('send-container')
const messageInput=document.getElementById('messageInp')
const messageContainer=document.querySelector('.container')

prompt("Please Enter your Name");

const append=(message,position)=>{
   const messageElement= document.createElement('div');
   messageElement.innerText=message;
   messageElement.classList.add('message');
   messageElement.classList.add(position);
   messageContainer.append(messageElement);

}
/*
socket.emit('new-user-joined',name);

socket.on('user-joined',data=>{

})
*/

// const name=prompt("Enter Your name");




socket.emit('')