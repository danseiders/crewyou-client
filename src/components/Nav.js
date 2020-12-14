import Axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    const [user, setUser] = useState({})

    const handleClick = () =>{
        Axios.get('http://localhost:8000/users/logout', {withCredentials: true})
        .then(
            sessionStorage.removeItem('username'),
            setUser({loggedIn: false})
            )
        }
    
        if(sessionStorage.username === undefined){
            return (
            <div className='nav-container'>
                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                    <Link to='/signup'>Create account</Link>
                    <Link to='/login'><button>Sign In</button></Link>
                </div>
            </div>
            )
        } else {
    return (
        <div className='nav-container'>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <h5>Hello, {sessionStorage.username}</h5>
                <Link to='/login'><button>Login</button></Link>
                <button onClick={handleClick}>Logout</button>
            </div>
        </div>
    )
    }
}