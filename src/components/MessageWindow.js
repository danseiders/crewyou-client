import React from 'react'
import MessageBox from './Messages'
import MessageForm from './MessageInput'

export default function MessageWindow(props) {
    return (
        <div className='dashboard-messages-container'>
            <MessageBox 
            messages={props.messages}/>
            <MessageForm 
                handleChange={props.handleChange} 
                onSubmit={props.onSubmit}/>
        </div>
    )
}
