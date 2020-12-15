import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardShow(props) {
    
    return (
        <div className='dashboard-profile-container'>
            <div className='profile-header'>
                <img src={props.user.imgURL} alt='user'></img>
                <h2>{props.user.firstName} {props.user.lastName}</h2>
                <h3>{props.user.airport}</h3>
            </div>
            <div className='profile-details'>
                <h4>{props.user.about}</h4>
                <h4>{props.user.position1}</h4>
                <h4>{props.user.touring}</h4>
                <h4>{props.user.availability}</h4>
            </div>
            <Link to='/profile/edit'><button>Edit Profile</button></Link>
        </div>
    )
}