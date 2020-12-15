import React from 'react'
import ProfileShow from './ProfileShow'
import CrewList from './CrewList'

export default function DashboardShow(props) {
    if(props.render.profileRender){
        return (
            <ProfileShow user={ props.user }/>
        )
    } else if (props.render.crewRender){
        return (
            <div className='dashboard-profile-container'>
                <input type='text'placeholder='Search Crew'></input>
                <CrewList crew={ props.crew } />
            </div>
        )
    } else if (props.render.managersRender) {
        return (
            <h1>Managers</h1>
        )
    } else if (props.render.messagesRender) {
        return (
            <h1>Messages</h1>
        )
    } else if (props.render.jobBoardRender) {
        return (
            <h1>Job Board</h1>
        )
    }
}
