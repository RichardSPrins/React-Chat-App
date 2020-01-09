import React from 'react'

const Message = (props) => {  
  const {message} = props
  return (
    <div className="message">
      <div className="message-username">{message.senderId}</div>
      <div className="message-text">{message.text}</div>
      {/* <div className="timestamp">{message.createdAt}</div> */}
    </div>
  )
}

export default Message