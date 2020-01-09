import React from 'react'
import Message from './Message'

const DUMMY_DATA = [
  {
    id:0,
    senderId: 'scottydo22',
    text: 'Hey, how\'s it going?'
  },
  {
    id:1,
    senderId: 'janedoe',
    text: 'Great! How about you?'
  },
  {
    id:2,
    senderId: 'scottydo22',
    text: 'Good to hear! I am great as well!'
  }
]

const MessageList = (props) => {
  const {messages} = props
  return (
    <div className="message-list">
      <div className="help-text">
        {messages.map(message => <Message message={message} key={message.id}/>)}
      </div>
    </div>
  )
}

export default MessageList