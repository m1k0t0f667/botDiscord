import React from 'react';
import "./Message.css"

const MessagePage=(props)=>{
    return (
    <div className="message">
        <p>{props.message}</p>
    </div> 
    )
}

export default MessagePage