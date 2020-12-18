import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileShow(props) {
    
    return (
        <div>
            <div className='profile-header'>
                <img className='profile-img' src={props.user.data.imgURL} alt='user'></img>
                <h2>{props.user.data.firstName} {props.user.data.lastName}</h2>
                <h3>{props.user.data.airport}</h3>
            </div>
            <div className='profile-details'>
                <h4>About: {props.user.data.about}</h4>
                <h4>Positions: {props.user.data.position1}, {props.user.data.position2},  {props.user.data.position3}, {props.user.data.position4}</h4>
                {props.user.data.touring ? <h4>Touring: Yes </h4> : <h4>Touring: No </h4>}
                <h4>Available on: {props.user.data.availability}</h4>
            </div>
            <div>
                { props.user.data.id > 0 ? <Link to='/profile/edit' ><button className='btn-dark'>Edit Profile</button></Link> : <Link to='profile/new'><button>Create Profile</button></Link> }
            </div>
        </div>
    )
}