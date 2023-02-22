// state
import React from 'react'
import { useState } from 'react'
const Message = () => {
    const [message,setMessage]= useState("Welcome visitor")
    
    const clickHandler = () => {
        setMessage("Done work")
    }
  return (
    <>
    <div>{message}</div>
    <button onClick={clickHandler}>Subscribe</button>
    </>
  )
}

export default Message