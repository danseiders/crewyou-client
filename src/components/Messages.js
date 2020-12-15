import React from 'react'

export default function Messages(props) {
    return (
        <div className='message-box'>
            {props.messages.map((message) => 
                <div key={message.id}>{message}</div>
            )}
        </div>
    )
}
