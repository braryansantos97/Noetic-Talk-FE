import React from 'react';
import { io } from "socket.io-client";
const socket = io();

export default class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state={
      message:'',
      messages:[]
    }
    this.send = this.send.bind(this)
  }
  async send(){
    await socket.emit('send', this.state.message)
  }
  async componentDidMount(){
    const copyMessages = [...this.state.messages];
    socket.on('receive', message => {
          if(this.state.messages.length<10){
            copyMessages.push(message);
            this.setState({messages:copyMessages});
          }
          else{
            console.log('made it to the else sta')
            copyMessages.shift();
            console.log(copyMessages)
            copyMessages.push(message);
            console.log(copyMessages)
            this.setState({messages:copyMessages});
          }
        })
    }
    // async componentDidUpdate(){
    //   const copyMessages = [...this.state.messages];
    //   socket.on('receive', message => {
    //         if(this.state.messages.length<11){
    //           copyMessages.push(message);
    //           this.setState({messages:copyMessages});
    //         }
    //         else{
    //           console.log('made it to the else sta')
    //           copyMessages.shift();
    //           console.log(copyMessages)
    //           copyMessages.push(message);
    //           console.log(copyMessages)
    //           this.setState({messages:copyMessages});
    //         }
    //       })
    // }
  render(){
    return(
    <div className="ChatHeader">
      <h1>Community Chats</h1>
      <h3>Select chat room</h3>
      <div className="ChatComponent">
      <div id='roomSelector'>
        <button id='room1'className='roomBtn'>General</button>
        <button id='room2'className='roomBtn'>Anxiety</button>
        <button id='room3'className='roomBtn'>Motivation</button>
        <button id='room4'className='roomBtn'>OCD</button>
        <button id='room5'className='roomBtn'>Stress</button>
        <button id='room6'className='roomBtn'>More</button>
      </div>
      <div id='messagebox'>
        <div id='message1' className='message'>{this.state.messages[0]}</div>
        <div id='message2' className='message'>{this.state.messages[1]}</div>
        <div id='message3' className='message'>{this.state.messages[2]}</div>
        <div id='message4' className='message'>{this.state.messages[3]}</div>
        <div id='message5' className='message'>{this.state.messages[4]}</div>
        <div id='message6' className='message'>{this.state.messages[5]}</div>
        <div id='message7' className='message'>{this.state.messages[6]}</div>
        <div id='message8' className='message'>{this.state.messages[7]}</div>
        <div id='message9' className='message'>{this.state.messages[8]}</div>
        <div id='message10' className='message'>{this.state.messages[9]}</div>
      </div>
      <div className='textInput'>
        <input className="form-control" value={this.state.message} onChange={e => {
          this.setState({message:e.target.value})
        }}
        placeholder="Send message"
        />
        <button id='sendbtn' onClick={(e) => this.send()}>Send</button>
      </div>
      </div>
    </div>
  )}
}
