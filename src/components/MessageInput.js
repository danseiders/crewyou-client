import React from 'react'

export default function MessageInput(props) {
    return (
        <div>
            <form className='message-form' onSubmit={props.onSubmit}>
                <label htmlFor='message'>Message</label>
                <input type='text' name='message' id='message' onChange={props.handleChange}></input>
                <input type='submit' value='Send'></input>
            </form>
        </div>
    )
}
