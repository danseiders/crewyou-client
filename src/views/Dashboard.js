import Axios from 'axios'
import React, { useState, useEffect} from 'react'
import LeftSidebar from '../components/LeftSidebar'
import MessageList from '../components/MessageWindow'
import DashboardShow from '../components/DashboardShow'
import io from 'socket.io-client'
import Home from './Home'
import Nav from '../components/Nav'
import { Redirect } from 'react-router-dom'

const { REACT_APP_SERVER_URL } = process.env
// const socket = io.connect(`${REACT_APP_SERVER_URL}`, {withCredentials: true})

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
                    props.setUser({profile: false})
                    console.log('no profile has been made')
                }else{
                    props.setUser({
                        data: res.data.data[0],
                        loggedIn: true
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

    
    // useEffect(() => {
    //     socketOn()
    // }, [messages.length])
    
    // const socketOn = () => {
    //     socket.on('message', msg => {
    //         setMessages([...messages, msg])
    //     })
    // }

    const handleClick = (event) => {
        setRender({[event.target.id]: true})
    }

    const handleChange = (event) => {
        setMessage(sessionStorage.username + ': ' + event.target.value)
    }
    
    const onSubmit = (event) => {
        event.preventDefault()
        // if (message !== ''){
        // socket.emit('message', message)
        // setMessage('')
        // }else{
        //     alert('Add a message!')
        // }
    }
    
    // if (! props.user.loggedIn) {
    //     return (
    //         <Home />
    //     )
    // } else {
    return (
        <div className='dashboard-container'>
            <LeftSidebar 
                render={render} 
                handleClick={handleClick}/>
            <DashboardShow 
                user={props.user} 
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
