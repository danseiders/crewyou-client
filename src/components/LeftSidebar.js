import React from 'react'

export default function LeftSidebar(props) {
    return (
        <div className='dashboard-sidebar-container'>
                <p className='sidebar-link' onClick={props.handleClick} id='profileRender'>Profile</p>
                <p className='sidebar-link' onClick={props.handleClick} id='crewRender'>Crew</p>
                <p className='sidebar-link' onClick={props.handleClick} id='messagesRender'>Messages</p>
                <p className='sidebar-link' onClick={props.handleClick} id='managersRender'>Managers</p>
                <p className='sidebar-link' onClick={props.handleClick} id='jobBoardRender'>Job Board</p>
                
        </div>
    )
}
