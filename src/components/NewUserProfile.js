import React, { useState } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'

const { REACT_APP_SERVER_URL } = process.env

export default function NewUserProfile(props) {
    const [redirect, setRedirect] = useState(false)
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        imgURL: '',
        airport: '',
        about: '',
        position1: '',
        position2: '',
        position3: '',
        position4: '',
        touring: false,
        availability: ''
    })
    const handleChange = (event) => {
        setProfile({...profile, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        Axios.post(`${REACT_APP_SERVER_URL}/profile/`, profile, { withCredentials: true })
        .then(res => {
            sessionStorage.setItem('loggedIn', true)
            console.log('submit new profile', res) 
            setRedirect(true)
            props.setUser({
                data: res.data.data,
                profile: true,
                
            })
        })
    }
    if(redirect){
        return <Redirect to='/dashboard' />
    }
    return (
        <div className='new-profile-container'>
            <form className='new-profile-form-container' onSubmit={handleSubmit}>
                <h1>create user profile</h1>
                <label htmlFor='imgURL'>imgURL</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='imgURL' 
                    id='imgURL' 
                    onChange={handleChange}>    
                </input>
                <label htmlFor='firstName'>First</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='firstName' 
                    id='firstName' 
                    onChange={handleChange}>    
                </input>
                <label htmlFor='lastName'>Last</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='lastName' 
                    id='lastName' 
                    onChange={handleChange}>
                </input>
                <label htmlFor='airport'>Airport</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='airport' 
                    id='airport' 
                    onChange={handleChange}>
                </input>
                <label htmlFor='about'>Bio</label>
                <input 
                    className='form-input'
                    type='textarea' 
                    name='about' 
                    id='about' 
                    onChange={handleChange}>    
                </input>
                <label htmlFor='position1'>1st Position</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='position1' 
                    id='position1' 
                    onChange={handleChange}>   
                </input>
                <label htmlFor='position2'>2nd Position</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='position2' 
                    id='position2' 
                    onChange={handleChange}>    
                </input>
                <label htmlFor='position3'>3rd Position</label>
                <input 
                    className='form-input'
                    type='text'
                    name='position3' 
                    id='position3' 
                    onChange={handleChange}>    
                </input>
                <label htmlFor='position4'>4th Position</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='position4' 
                    id='position4' 
                    onChange={handleChange}>    
                </input>
                <label htmlFor='touring'>Do you tour?</label>
                <input 
                    className='form-input'
                    type='radio' 
                    name='touring' 
                    id='touring' 
                    onChange={handleChange}>    
                </input>
                <label htmlFor='availability'>I'm available on</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='availability' 
                    id='availability' 
                    onChange= {handleChange}>    
                </input>
                <input type='submit' value='Create Profile'></input>
            </form>
        </div>
    )
 }
