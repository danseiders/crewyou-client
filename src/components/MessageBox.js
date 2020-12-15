import React from 'react'

export default function MessageBox(props) {
    return (
        <div className='message-box'>
            {props.messages.map((message) => 
                <div key={message.id}>{message}</div>
            )}
        </div>
    )
}
