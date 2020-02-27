import React, { Component } from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import io from 'socket.io-client';

const socket = io('http://192.168.0.251:3000');

 const URL = "ws://192.168.0.251:3000"

class Chat extends Component {
  state = {
    name: 'Bob',
    messages: [],
  }

  ws = new WebSocket(URL)

  componentDidMount() {
    // this.ws.onopen = () => {
    //   // on connecting, do nothing but log it to the console
    //   console.log('connected')
    // }


    socket.on('connect', function(){
      console.log('Success')
    });

    // socket.emit("createMessage",'Connection Successful');

    

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      this.addMessage(message)
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))

  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    //const message = { name: this.state.name, message: messageString }
     //this.ws.send(JSON.stringify(data))
     var data =  {
                senderUserId: "5d6110262c0ab62b5c172544",
                senderName: "sachin",
                recieverUserId: "5d61106f2c0ab62b5c172545",
                recieverName: "honey",
                message: "Helloo"
              }

    socket.emit("createMessage",data);
    console.log('in message')

     this.addMessage(data)
  }

  componentWillUnmount (){
    // this.ws.onclose = () => {
    //   console.log('disconnected')
    //   // automatically try to reconnect on connection loss
    //   this.setState({
    //     ws: new WebSocket(URL),
    //   })
    // }

    socket.off('Disconnected')
  }
  render() {
    return (
      <div>
        <label htmlFor="name">
          Name:&nbsp;
          <input
            type="text"
            id={'name'}
            placeholder={'Enter your name...'}
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>
        <ChatInput
          ws={this.ws}
          onSubmitMessage={messageString => this.submitMessage(messageString)}
        />
        {this.state.messages.map((message, index) =>
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
          />,
        )}
      </div>
    )
  }
}

export default Chat