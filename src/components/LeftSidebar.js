import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftSidebar(props) {
    return (
        <div className='dashboard-sidebar-container'>
                <Link onClick={props.handleClick} id='profileRender'>Profile</Link>
                <Link onClick={props.handleClick} id='crewRender'>Crew</Link>
                <Link onClick={props.handleClick} id='messagesRender'>Messages</Link>
                <Link onClick={props.handleClick} id='managersRender'>Managers</Link>
                <Link onClick={props.handleClick} id='jobBoardRender'>Job Board</Link>
                
        </div>
    )
}
