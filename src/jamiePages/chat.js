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
    <div className="ChatComponent">
      <div id='roomSelector'>
        <button id='room1'className='roomBtn'>Room 1</button>
        <button id='room2'className='roomBtn'>Room 2</button>
        <button id='room3'className='roomBtn'>Room 3</button>
        <button id='room4'className='roomBtn'>Room 4</button>
        <button id='room5'className='roomBtn'>Room 5</button>
        <button id='room6'className='roomBtn'>Room 6</button>
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
        <input value={this.state.message} onChange={e => {
          this.setState({message:e.target.value})
        }}/>
        <button onClick={(e) => this.send()}>Send</button>
      </div>
    </div>
  )}
}
