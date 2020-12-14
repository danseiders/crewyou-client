import Axios from 'axios'
import React, { useState, useEffect} from 'react'
import LeftSidebar from '../components/LeftSidebar'
import MessageList from '../components/MessageList'
import DashboardShow from '../components/DashboardShow'
import CrewList from '../components/CrewList'

export default function Dashboard() {
    const [user, setUser] = useState({})
    const [crew, setCrew] = useState([])
    const [render, setRender] = useState({
        crewRender: true, //this will be the default view when page is rendered
    })

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
     const handleClick = (event) => {
        setRender({[event.target.id]: true})
     }
    return (
        <div className='dashboard-container'>
            <LeftSidebar render={render} handleClick={handleClick}/>
            <DashboardShow 
                user={user} 
                crew={crew} 
                render={render}/>
            <MessageList />
        </div>
    )
}
