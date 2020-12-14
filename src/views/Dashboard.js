import Axios from 'axios'
import React, { useState, useEffect} from 'react'
import LeftSidebar from '../components/LeftSidebar'
import MessageList from '../components/MessageList'
import DashboardShow from '../components/DashboardShow'
import CrewList from '../components/CrewList'

export default function Dashboard() {
    const [user, setUser] = useState({})
    const [crew, setCrew] = useState([])

    useEffect(async () => {
        fetchUser()
        fetchCrew()
    }, [])
    
    const fetchUser = () => {
        Axios.get('http://localhost:8000/profile/user', { withCredentials: true })
    .then(res => {
        setUser(res.data.data[0])
        })
    }
    
    const fetchCrew = () => {
        Axios.get('http://localhost:8000/profile/all', { withCredentials: true })
    .then(res => {
        console.log(res.data.data)
        setCrew(res.data.data)
        })
    }
    
    return (
        <div className='dashboard-container'>
            <LeftSidebar />
            <DashboardShow user={user} crew={crew}/>
            <MessageList />
        </div>
    )
}
