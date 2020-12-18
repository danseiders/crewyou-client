import React from 'react'
import ProfileShow from './ProfileShow'
import CrewList from './CrewList'

export default function DashboardShow(props) {
    if(props.render.profileRender){
        return (
            <div className='dashboard-show'>
                <ProfileShow className='dashboard-show' user={ props.user }/>
            </div>
        )
    } else if (props.render.crewRender){
        return (
            <div className='dashboard-show'>
                <input type='text'placeholder='Search Crew'></input>
                <CrewList crew={ props.crew } />
            </div>
        )
    } else if (props.render.managersRender) {
        return (
            <div className='dashboard-show'>
                <h1>Managers</h1>
            </div>
        )
    } else if (props.render.messagesRender) {
        return (
            <div className='dashboard-show'>
                <h1>Messages</h1>
            </div>
        )
    } else if (props.render.jobBoardRender) {
        return (
            <div className='dashboard-show'>
                <h1>Job Board</h1>
            </div>
        )
    }
}
