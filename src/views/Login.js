import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Login() {
    const  [user, setUser] = useState({})

    const handleChange = (event) => {
        setUser({...user, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:8000/users/login', {
            email: user.email,
            password: user.password,

        }).then(res => {
            sessionStorage.setItem('userEmail', res.data.data.email) 
            console.log(sessionStorage)
        })
    }

    return (
        <div className='login-container'>
            <div className='login-form-container'>
                <form className='login-form' onSubmit={handleSubmit}>
                    <h3>Sign In</h3>
                    <label>Email</label>
                    <input className='form-input' type='text' name='email' id='email' onChange={handleChange}></input>
                    <label>Password</label>
                    <input className='form-input' type='password' name='password' id='password' onChange={handleChange}></input>
                    <input className='form-input' type='submit' value='Sign In'></input>
                </form>
            </div>
        </div>
    )
}
