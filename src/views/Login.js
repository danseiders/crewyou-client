import React, {useState} from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

const { REACT_APP_SERVER_URL } = process.env

export default function Login(props) {
    const [redirect, setRedirect] = useState(null)

    const handleChange = (event) => {
        props.setUser({...props.user, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        Axios.post(`${REACT_APP_SERVER_URL}/users/login`, {
            email: props.user.email,
            password: props.user.password
        }, { withCredentials: true })
        .then(res => {
            if(res.data.status.code === 200){
                setRedirect(true)
                sessionStorage.setItem('loggedIn', true)
                props.setUser({
                    data: res.data.data,
                    loggedIn: true
                })
            } else {
                console.log('something went wrong - try again')
            }
        })
    }

    if(redirect){
        return <Redirect to='/dashboard'/>
    } else {
        return (
            <div className='login-container'>
                <div className='login-form-container'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <h3>Sign In</h3>
                        <label htmlFor='email'>Email</label>
                        <input className='form-input' type='text' name='email' id='email' onChange={handleChange}></input>
                        <label htmlFor='password'>Password</label>
                        <input className='form-input' type='password' name='password' id='password' onChange={handleChange}></input>
                        <input className='form-input' type='submit' value='Sign In'></input>
                    </form>
                </div>
            </div>
        )   
    }
}
