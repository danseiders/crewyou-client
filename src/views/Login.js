import React, {useState, useEffect} from 'react'

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target, 'submit hit')
    }

    return (
        <div className='login-container'>
            <div className='login-form-container'>
                <form className='login-form' onSubmit={handleSubmit}>
                    <h3>Sign In</h3>
                    <input type='text' name='email' id='email'></input>
                    <input type='password' name='password' id='password'></input>
                    <input type='submit' value='Sign In'></input>
                </form>
            </div>
        </div>
    )
}
