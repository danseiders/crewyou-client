import Axios from 'axios'
import React, { useState, useEffect} from 'react'
import LeftSidebar from '../components/LeftSidebar'
import MessageList from '../components/MessageWindow'
import DashboardShow from '../components/DashboardShow'
import io from 'socket.io-client'
import Home from './Home'
import Nav from '../components/Nav'
import { Redirect } from 'react-router-dom'
import NewUserProfile from '../components/NewUserProfile'

const { REACT_APP_SERVER_URL } = process.env
const socket = io.connect(`${REACT_APP_SERVER_URL}`)

export default function Dashboard(props) {
    const [crew, setCrew] = useState([])
    const [messages, setMessages] = useState(['Hello! Welcome to Crew You!'])
    const [message, setMessage] = useState({
        username: props.user.username,
        message: ''
    })
    const [render, setRender] = useState({
        crewRender: true, //this will be the default view when page is rendered
    })
    
    useEffect( () => {
        function fetchUser() { //this gets the user for user profile display
            Axios.get(`${REACT_APP_SERVER_URL}/profile/user`, { withCredentials: true })
            .then(res => {
                if(res.data.data.length == 0){
                    console.log('no profile has been made')
                }else{
                    props.setUser({
                        profile: true,
                        data: res.data.data[0],
                        username: res.data.data[0].user_id.username
                        })
                    }
                })
            }
        function fetchCrew() { //this gets all crew profiles on site
            Axios.get(`${REACT_APP_SERVER_URL}/profile/all`, { withCredentials: true })
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
        setMessage(props.user.username + ': ' + event.target.value)
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
            { ! props.user.profile ? 
                <NewUserProfile 
                    user={props.user} 
                    setUser={props.setUser} /> 
                : 
                <DashboardShow 
                    user={props.user} 
                    crew={crew} 
                    render={render}/>}
            <MessageList 
                message={message} 
                messages={messages} 
                user={props.user}
                handleChange={handleChange}
                onSubmit={onSubmit}/>
        </div>
        )
    }
