import React from 'react'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import Chatkit from '@pusher/chatkit-client'
import {tokenUrl, instanceLocator} from './chatConfig'
import './style.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: [],
            chatManager: {},
            currentUser: {},
            roomList: []
        }
        this.sendMessage = this.sendMessage.bind(this)
    } 
    
    componentDidMount() {
        const newChatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'l33t',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })
        newChatManager.connect()
        .then(currentUser => {
          this.setState({
            ...this.state,
            currentUser: currentUser
          })
          console.log(currentUser)
          currentUser.subscribeToRoom({
            roomId: 'a7c58290-2963-48e4-adfd-64e788c56c59',
            hooks: {
              onMessage: message => {
                this.setState({
                  messages: [...this.state.messages, message]
                })
              }
            }
          })
        })
        this.setState({
          ...this.state,
          chatManager: newChatManager
        })
        console.log(newChatManager)
    }

    sendMessage(text) {
      console.log(text)
      this.state.currentUser.sendMessage({
        text: text,
        roomId: 'a7c58290-2963-48e4-adfd-64e788c56c59'
      })  
    }


    render() {
      console.log(this.state.messages)
      console.log('coming from state', this.state.chatManager)
      console.log('user on state', this.state.currentUser)
        return (
            <div className="app">
                <RoomList />
                <MessageList messages={this.state.messages} />
                <SendMessageForm sendMessage={this.sendMessage}/>
                <NewRoomForm />
            </div>
        );
    }
}

export default App