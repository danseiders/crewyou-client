import React from 'react'

export default function MessageInput(props) {
    return (
        <div>
            <form className='message-form' onSubmit={props.onSubmit}>
                <label htmlFor='message'></label>
                <input type='text' name='message' id='message' onChange={props.handleChange} placeholder='Write something!'></input>
                <input className='btn-dark' type='submit' value='Send'></input>
            </form>
        </div>
    )
}
