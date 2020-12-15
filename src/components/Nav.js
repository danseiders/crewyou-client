import Axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    // const [user, setUser] = useState({})
    const [render, setRender] = useState({
        createUser: false
    })

    const handleClick = () =>{
        Axios.get('http://localhost:8000/users/logout', {withCredentials: true})
        .then(
            sessionStorage.removeItem('username'),
            // setUser({ loggedIn: false })
            )
        }
    const handleReRender = () => {
        setRender({ createUser: true })
    }
    
        if(sessionStorage.username === undefined){
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
                <h5>Hello, {sessionStorage.username}</h5>
                <Link to='/login'><button>Login</button></Link>
                <button onClick={handleClick}>Logout</button>
            </div>
        </div>
    )
    }
}