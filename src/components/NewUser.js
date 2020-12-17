import React, {useState} from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

const { REACT_APP_SERVER_URL } = process.env

export default function NewUser(props) {
    const [user, setUser] = useState({ crew: false })
    const [reload, setReload] = useState(null)

    const handleChange = (event) => {
        setUser({...user, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        Axios.post(`${REACT_APP_SERVER_URL}/users/new`, user, { withCredentials: true })
        .then(res => {
            if(res.data.status.code === 201){
            setReload(true)
            sessionStorage.setItem('loggedIn', true)
            props.setUser({
                data: res.data.data,
            })
            } else {
                console.log('something went wrong - try again')
            }
        })
    }

        if (reload) {
            return (
                <Redirect to='/dashboard' />
            )
        }    
        return (
            <div className='login-form-container'>
                <form className='login-form' onSubmit={handleSubmit}>
                    <h3>Create a new account</h3>
                    <label htmlFor='username'>Username</label>
                    <input className='form-input' type='text' name='username' id='username' onChange={handleChange}></input>
                    <label htmlFor='email'>Email</label>
                    <input className='form-input' type='text' name='email' id='email' onChange={handleChange}></input>
                    <label htmlFor='password'>Password</label>
                    <input className='form-input' type='password' name='password' id='password' onChange={handleChange}></input>
                    <label htmlFor='crew'>Are you crew?
                    <input className='radio' type='radio' name='crew'id='crew' onChange={handleChange}></input></label>
                    <input className='form-input btn-dark' type='submit' value='Create Account'></input>
                </form>
            </div>
            
        )   
    }
