import Axios from 'axios'
import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

const { REACT_APP_SERVER_URL } = process.env

export default function Nav(props) {
    const [redirect, setRedirect] = useState(false)

    const handleClick = () =>{
        Axios.get(`${REACT_APP_SERVER_URL}/users/logout`, {withCredentials: true})
        .then(
            sessionStorage.removeItem('loggedIn'),
            props.setUser({}),
            setRedirect(true)
            )
        }
    
    if(redirect){
        return <Redirect to='/' />
    } else if(sessionStorage.loggedIn == undefined){
        return (
        <div className='nav-container'>
            <div>
                <Link to='/' className='logo'><h1>CREWYOU</h1></Link>
            </div>
            <div className='nav-buttons'>
                <Link to='/user/new' className='nav-buttons'><button className='btn-light'>Create account</button></Link>
                <Link to='/login'><button className='btn-light'>Sign In</button></Link>
            </div>
        </div>
        )
    } else {
        return (
            <div className='nav-container'>
                <div>
                    <Link to='/dashboard' className='logo' ><h1>CREWYOU</h1></Link>
                </div>
                <div className='nav-buttons'>
                    <h5 className='white'>Hello, {props.user.data.firstName}</h5>
                    <button onClick={handleClick} className='btn-light'>Logout</button>
                </div>
            </div>
        )
    }
}