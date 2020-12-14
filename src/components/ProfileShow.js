import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

export default function ProfileShow() {
    const [user, setUser] = useState({
        imgURL: null
    })

    useEffect(async () => {
        fetchUser()
    }, [])
    
    const fetchUser = () => {
        Axios.get('http://localhost:8000/profile/', { withCredentials: true })
    .then(res => {
        setUser(res.data.data[0])
        })
    }
    return (
        <div className='dashboard-profile-container'>
            <div className='profile-header'>
                <img src={user.imgURL} alt='user'></img>
                <h2>{user.firstName} {user.lastName}</h2>
                <h3>{user.airport}</h3>
            </div>
            <div className='profile-details'>
                <h4>{user.about}</h4>
                <h4>{user.position1}</h4>
                <h4>{user.touring}</h4>
                <h4>{user.availability}</h4>
            </div>
            <Link to='/profile/edit'><button>Edit Profile</button></Link>
        </div>
    )
}
