import React from 'react'
import MessageBox from './MessageBox'
import MessageForm from './MessageForm'

export default function MessageList(props) {
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
