import React from 'react'
import MessageBox from './Messages'
import MessageInput from './MessageInput'

export default function MessageWindow(props) {
    return (
        <div className='dashboard-messages-container'>
            <MessageBox 
            messages={props.messages}
            user={props.user}
            />
            <MessageInput 
                handleChange={props.handleChange} 
                onSubmit={props.onSubmit}/>
        </div>
    )
}
