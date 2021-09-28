import React from 'react';
import Chatroom from '../jamieComponents/chatroom.js'
const io = require("socket.io-client");
const socket = io("https://noetic-talk-socket.herokuapp.com/");
const messages = this.state.messages;
constructor(){
  super();
  this.state={
    messages:[]
  }
}
const send = async() => {
  socket.emit('send', message)
}
socket.on('receive', message){
  if(messages.length<11){
    messages.push(message);
  }
  else{
    messages.shift();
    messages.push(message);
  }
}
render(){
  return(
  <div>
/*    <div id='roomSelector'>
      <button id='room1'class='roomBtn'>Room 1</button>
      <button id='room2'class='roomBtn'>Room 2</button>
      <button id='room3'class='roomBtn'>Room 3</button>
      <button id='room4'class='roomBtn'>Room 4</button>
      <button id='room5'class='roomBtn'>Room 5</button>
      <button id='room6'class='roomBtn'>Room 6</button>
      </div>*/
    <div id='messagebox'>
      <div id='message1' class='message'>{messages[0]}</div>
      <div id='message2' class='message'>{messages[1]}</div>
      <div id='message3' class='message'>{messages[2]}</div>
      <div id='message4' class='message'>{messages[3]}</div>
      <div id='message5' class='message'>{messages[4]}</div>
      <div id='message6' class='message'>{messages[5]}</div>
      <div id='message7' class='message'>{messages[6]}</div>
      <div id='message8' class='message'>{messages[7]}</div>
      <div id='message9' class='message'>{messages[8]}</div>
      <div id='message10' class='message'>{messages[9]}</div>
    </div>
    <div class='textInput'>
      <input value={message} onChange={e => setMessage(e.target.value)}/>
      <button onClick={send}>Send</button>
    </div>
  </div>
)}
