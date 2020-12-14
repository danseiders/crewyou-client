import Axios from 'axios'
import React, { useState, useEffect} from 'react'
import LeftSidebar from '../components/LeftSidebar'
import MessageList from '../components/MessageList'
import ProfileShow from '../components/ProfileShow'

export default function Dashboard() {
    const [user, setUser] = useState({})

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
        <div className='dashboard-container'>
            <LeftSidebar />
            <ProfileShow user={user}/>
            <MessageList />
        </div>
    )
}
