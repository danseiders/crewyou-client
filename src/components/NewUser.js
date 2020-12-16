import React, {useState} from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

const { REACT_APP_SERVER_URL } = process.env

export default function NewUser() {
    const [user, setUser] = useState({
        crew: false
})
    const [reload, setReload] = useState(null)

    const handleChange = (event) => {
        setUser({...user, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(user)
        Axios.post(`${REACT_APP_SERVER_URL}/users/new`, user, { withCredentials: true })
        .then(res => {
            if(res.data.status.code === 201){
            sessionStorage.setItem('username', res.data.data.username) 
            sessionStorage.setItem('crew', res.data.crew)
            setUser({password: ''})
            setReload(true)
            } else {
                console.log('something went wrong - try again')
            }
        })
    }

        if (reload) {
            return (
                <Redirect to='/profile/new' />
            )
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
