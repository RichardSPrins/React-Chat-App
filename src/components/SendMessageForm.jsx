import React, { useState, useEffect } from 'react'

const SendMessageForm = (props) => {
  const [input, setInput] = useState({inputText: ''})

  const handleInputChange = e => {
    e.preventDefault();
    console.log(e.target.value)
    setInput({...input,[e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.sendMessage(input.inputText)
  }

  return (
    <form 
      className="send-message-form"
      onSubmit={handleSubmit}
    >
      <input
        placeholder="New Message"
        type="text"
        name="inputText"
        value={input.inputText}
        onChange={handleInputChange}
      />
    </form>
  )
}

export default SendMessageForm