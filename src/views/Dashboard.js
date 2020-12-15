import Axios from 'axios'
import React, { useState, useEffect} from 'react'
import LeftSidebar from '../components/LeftSidebar'
import MessageList from '../components/MessageList'
import DashboardShow from '../components/DashboardShow'
import io from 'socket.io-client'

const serverURL = 'http://localhost:8000'
const socket = io.connect(`${serverURL}`)

export default function Dashboard() {
    const [user, setUser] = useState({})
    const [crew, setCrew] = useState([])
    const [messages, setMessages] = useState(['Hello! Welcome to Crew You!'])
    const [message, setMessage] = useState({
        username: user.username,
        message: ''
    })
    const [render, setRender] = useState({
        crewRender: true, //this will be the default view when page is rendered
    })
    
    useEffect( () => {
        function fetchUser() { //this gets the user for user profile display
            Axios.get('http://localhost:8000/profile/user', { withCredentials: true })
            .then(res => {
                setUser(res.data.data[0])
                })
            }
        function fetchCrew() { //this gets all crew profiles on site
            Axios.get('http://localhost:8000/profile/all', { withCredentials: true })
            .then(res => {
                setCrew(res.data.data)
            })
        }
        fetchCrew()
        fetchUser()
    }, [])
    
    useEffect(() => {
        socketOn()
    }, [messages.length])
    
    const socketOn = () => {
        socket.on('message', msg => {
            setMessages([...messages, msg])
        })
    }

    const handleClick = (event) => {
        setRender({[event.target.id]: true})
    }

    const handleChange = (event) => {
        setMessage(sessionStorage.username + ': ' + event.target.value)
    }
    
    const onSubmit = (event) => {
        event.preventDefault()
        if (message !== ''){
        socket.emit('message', message)
        setMessage('')
        }else{
            alert('Add a message!')
        }
    }
    return (
        <div className='dashboard-container'>
            <LeftSidebar 
                render={render} 
                handleClick={handleClick}/>
            <DashboardShow 
                user={user} 
                crew={crew} 
                render={render}/>
            <MessageList 
                message={message} 
                messages={messages} 
                handleChange={handleChange}
                onSubmit={onSubmit}/>
        </div>
    )
}
