import React from 'react'

export default function Messages(props) {
    return (
        <div className='message-box'>
            <h4>Messages</h4>
            {props.messages.map((message) => 
                <div className='message-box-message' key={message._id}>{message}</div>
            )}
        </div>
    )
}
