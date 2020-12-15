import React, {useState} from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export default function NewUser() {
    const [user, setUser] = useState({
        crew: false
    })
    const [redirect, setReload] = useState({dashboard: null})

    const handleChange = (event) => {
        setUser({...user, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(user)
        Axios.post('http://localhost:8000/users/new', user, { withCredentials: true })
        .then(res => {
            if(res.data.status.code === 201){
            sessionStorage.setItem('username', res.data.data.username) 
            sessionStorage.setItem('crew', res.data.crew)
            setUser({password: ''})
            setReload({dashboard: true})
            } else {
                console.log('something went wrong - try again')
            }
        })
    }

    
        return (
            <div className='login-container'>
                <div className='login-form-container'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <h3>Create a new account</h3>
                        <label htmlFor='username'>Username</label>
                        <input className='form-input' type='text' name='username' id='username' onChange={handleChange}></input>
                        <label htmlFor='email'>Email</label>
                        <input className='form-input' type='text' name='email' id='email' onChange={handleChange}></input>
                        <label htmlFor='password'>Password</label>
                        <input className='form-input' type='password' name='password' id='password' onChange={handleChange}></input>
                        <label htmlFor='crew'>Are you crew?</label>
                        <input className='form-input' type='radio' name='crew'id='crew' onChange={handleChange}></input>
                        <input className='form-input' type='submit' value='Create Account'></input>
                    </form>
                </div>
            </div>
        )   
    }
