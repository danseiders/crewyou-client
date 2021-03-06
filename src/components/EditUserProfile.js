import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'

const { REACT_APP_SERVER_URL } = process.env

export default function EditUserProfile(props) {
    const [profile, setProfile] = useState({})
    const [redirect, setRedirect] = useState()
    
    useEffect(() => {
        fetchUser()
    }, [])
    
    const fetchUser = () => {
        Axios.get(`${REACT_APP_SERVER_URL}/profile/user`, { withCredentials: true })
    .then(res => {
        setProfile(res.data.data[0])
        })
    }
    
    const handleChange = (event) => {
        setProfile({...profile, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(profile)
        Axios.put(`${REACT_APP_SERVER_URL}/profile/${profile.id}`, {
            firstName: profile.firstName,
            lastName: profile.lastName,
            imgURL: profile.imgURL,
            airport: profile.airport,
            about: profile.about,
            position1: profile.position1,
            position2: profile.position2,
            position3: profile.position3,
            position4: profile.position4,
            touring: profile.touring,
            availability: profile.availability
        }, {withCredentials: true})
        .catch(err => {
            console.log(err)
        }).then(res => {
            console.log(res)
            setRedirect(true)
        })
    }
    const handleDelete = (event) => {
        Axios.delete(`${REACT_APP_SERVER_URL}/profile/${profile.id}`)
        .catch(err => {
            console.log(err)
        }).then(res => {
            console.log(res)
            props.setUser({profile: false})
            setRedirect(true)

        })
    }

    if(redirect){
        return <Redirect to='/dashboard' />
    }
    return (
        <div className='new-profile-container'>
            <form className='new-profile-form-container' onSubmit={handleSubmit}>
                <h1>Edit your profile</h1>
                <label htmlFor='imgURL'>imgURL</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='imgURL' 
                    id='imgURL' 
                    onChange={handleChange}
                    defaultValue={profile.imgURL}>    
                </input>
                <label htmlFor='firstName'>First</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='firstName' 
                    id='firstName' 
                    onChange={handleChange}
                    defaultValue={profile.firstName}>    
                </input>
                <label htmlFor='lastName'>Last</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='lastName' 
                    id='lastName' 
                    onChange={handleChange}
                    defaultValue={profile.lastName}>
                </input>
                <label htmlFor='airport'>Airport</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='airport' 
                    id='airport' 
                    onChange={handleChange}
                    defaultValue={profile.airport}>
                </input>
                <label htmlFor='about'>Bio</label>
                <input 
                    className='form-input'
                    type='textarea' 
                    name='about' 
                    id='about' 
                    onChange={handleChange}
                    defaultValue={profile.about}>    
                </input>
                <label htmlFor='position1'>1st Position</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='position1' 
                    id='position1' 
                    onChange={handleChange}
                    defaultValue={profile.position1}>   
                </input>
                <label htmlFor='position2'>2nd Position</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='position2' 
                    id='position2' 
                    onChange={handleChange}
                    defaultValue={profile.position2}>    
                </input>
                <label htmlFor='position3'>3rd Position</label>
                <input 
                    className='form-input'
                    type='text'
                    name='position3' 
                    id='position3' 
                    onChange={handleChange}
                    defaultValue={profile.position3}>    
                </input>
                <label htmlFor='position4'>4th Position</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='position4' 
                    id='position4' 
                    onChange={handleChange}
                    defaultValue={profile.position4}>    
                </input>
                <label htmlFor='touring'>Do you tour?</label>
                <input 
                    className='form-input'
                    type='radio' 
                    name='touring' 
                    id='touring' 
                    onChange={handleChange}
                    defaultValue={profile.touring}>    
                </input>
                <label htmlFor='availability'>I'm available on</label>
                <input 
                    className='form-input'
                    type='text' 
                    name='availability' 
                    id='availability' 
                    onChange= {handleChange}
                    defaultValue={profile.availability}>    
                </input>
                <input className='btn-dark' type='submit' value='Confirm Edits'></input>
                <button className='btn-dark' onClick={handleDelete}>Delete Profile</button>
            </form>
        </div>
    )
 }
