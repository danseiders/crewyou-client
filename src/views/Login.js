import React from 'react'

export default function Login() {
    return (
        <div>
            <form>
                <input type='text' name='email' id='email'></input>
                <input type='password' name='password' id='password'></input>
                <input type='submit' value='Sign In'></input>
            </form>
        </div>
    )
}
