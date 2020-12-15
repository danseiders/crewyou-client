import React, {useState} from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export default function Login() {
    const [user, setUser] = useState({})
    const [redirect, setReload] = useState({dashboard: null})

    const handleChange = (event) => {
        setUser({...user, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        Axios.post('https://crewyou-api.herokuapp.com/users/login', user, { withCredentials: true })
        .then(res => {
            if(res.data.status.code === 200){
            sessionStorage.setItem('username', res.data.data.username) 
            sessionStorage.setItem('crew', res.data.crew)
            setUser({
                password: '',
                username: res.data.data.username
            })
            setReload({dashboard: true})
            } else {
                console.log('something went wrong - try again')
            }
        })
    }

    if(redirect.dashboard === true){
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
