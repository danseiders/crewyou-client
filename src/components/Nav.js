import Axios from 'axios'
import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

const { REACT_APP_SERVER_URL } = process.env

export default function Nav(props) {

    const [render, setRender] = useState({
        createUser: false
    })

    const handleClick = () =>{
        Axios.get(`${REACT_APP_SERVER_URL}/users/logout`, {withCredentials: true})
        .then(
            sessionStorage.removeItem('loggedIn'),
            props.setUser({})
            )
        }
    const handleReRender = () => {
        setRender({ createUser: true })
    }
    
        if(props.user.loggedIn == undefined){
            return (
            <div className='nav-container'>
                <div>
                    <Link to='/'><h1>CrewYou</h1></Link>
                </div>
                <div>
                    <Link to='/user/new'>Create account</Link>
                    <Link to='/login'><button>Sign In</button></Link>
                </div>
            </div>
            )
        } else {
    return (
        <div className='nav-container'>
            <div>
                <Link to='/dashboard'><h1>CrewYou</h1></Link>
            </div>
            <div>
                <h5>Hello, {props.user.username}</h5>
                <Link to='/login'><button>Login</button></Link>
                <button onClick={handleClick}>Logout</button>
            </div>
        </div>
    )
    }
}