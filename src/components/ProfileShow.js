import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileShow(props) {
    
    return (
        <div className='dashboard-profile-container'>
            <div className='profile-header'>
                <img src={props.user.data.imgURL} alt='user'></img>
                <h2>{props.user.data.firstName} {props.user.lastName}</h2>
                <h3>{props.user.data.airport}</h3>
            </div>
            <div className='profile-details'>
                <h4>{props.user.data.about}</h4>
                <h4>{props.user.data.position1}</h4>
                <h4>{props.user.data.touring}</h4>
                <h4>{props.user.data.availability}</h4>
            </div>
            <div>
                { props.user.data.profile ? <Link to='/profile/edit'><button>Edit Profile</button></Link> : <Link to='profile/new'><button>Create Profile</button></Link> }
            </div>
        </div>
    )
}